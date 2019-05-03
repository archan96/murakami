import React, { Component } from "react";
import Web from "./components/web";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/loader";
import logo from "./logo.svg";
import "./App.css";
import mp3_file from "./sound/bg~1.mp3";
import whoosh from "./sound/woosh.mp3";

class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      h: 0,
      loaded: false
    };
  }

  handleLoad = () => {
    setTimeout(() => this.setState({ page: 2 }), 500);
  };

  componentWillMount = () => {
    this.windowHeight();
  };

  windowHeight = () => {
    this.setState({ h: window.innerHeight });
  };

  render() {
    return (
      <Router BrowserRouter basename="murakami">
        <>
          <Web handleLoad={this.handleLoad} page={this.state.page} />

          {this.state.page === 1 && (
            <>
              {/**load */}
              <Loader />
            </>
          )}
        </>
      </Router>
    );
  }
}

export default App;
