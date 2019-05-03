import React, { Component } from "react";
import Web from "./components/web";
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
      w: 0,
      h: 0
    };
  }

  componentDidMount = () => {
    this.setState({ page: 2 });
  };

  componentWillMount = () => {
    this.windowHeight();
  };

  windowHeight = () => {
    this.setState({ w: window.innerWidth, h: window.innerHeight });
  };

  render() {
    return (
      <>
        {this.state.page != 1 && <Web />}

        {this.state.page === 1 && (
          <>
            {this.state.h < 1080 && (
              <>
                <img className="hide" src="./images/1080w/1080.png" />
                <img className="hide" src="./images/1080w/bookFour.png" />
                <img className="hide" src="./images/1080w/bookOne2.png" />
                <img className="hide" src="./images/1080w/bookThree.png" />
                <img className="hide" src="./images/1080w/bookTwo.png.png" />
                <img className="hide" src="./images/1080w/mr.jpg.png" />
              </>
            )}

            {this.state.h > 1080 && (
              <>
                <img className="hide" src="./images/2160w/1080.png" />
                <img className="hide" src="./images/2160w/bookFour.png" />
                <img className="hide" src="./images/2160w/bookOne2.png" />
                <img className="hide" src="./images/2160w/bookThree.png" />
                <img className="hide" src="./images/2160w/bookTwo.png.png" />
                <img className="hide" src="./images/2160w/mr.jpg.png" />
                <img className="hide" src="./images/2160w/shadowBook.png" />
              </>
            )}

            <img className="hide" src="./images/murakami.jpg" />

            <audio src={mp3_file} type="audio/mp3" autoPlay={false} />
            <audio src={whoosh} type="audio/mp3" autoPlay={false} />

            {/**load */}
            <Loader />
          </>
        )}
      </>
    );
  }
}

export default App;
