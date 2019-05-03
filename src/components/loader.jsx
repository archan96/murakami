import React, { Component } from "react";
import "./load.css";

class Loader extends Component {
  constructor() {
    super();

    this.state = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
  }

  componentDidMount = () => {
    this.windowHeight();
  };

  windowHeight = () => {
    this.setState({ w: window.innerWidth, h: window.innerHeight });
  };

  mouseMove = e => {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    this.pageMouseMove();
  };

  pageMouseMove = () => {
    let x = this.state.x;
    let y = this.state.y;
    let w = this.state.w;
    let h = this.state.h;

    let top = y - h / 2;
    let left = x - w / 2;

    let boudaries = (h * 1.6) / 100;

    left = left / 200;
    top = top / 200;

    left <= boudaries &&
      (document.getElementById("pupil1").style.transform =
        "translate(" + left + "px, " + top + "px)");

    left <= boudaries &&
      (document.getElementById("pupil2").style.transform =
        "translate(" + left + "px, " + top + "px)");
  };

  render() {
    return (
      <>
        <div className="loader" onMouseMove={this.mouseMove}>
          <div className="loaderContent">
            {/**CAT */}
            <div className="loadingCatSec">
              <div className="LoadCatImg" />

              {/**EYEs */}
              <div className="LoadCatEyes">
                <div className="eyeCircle">
                  <div className="eyePupil" id="pupil1" />
                </div>

                <div className="eyeCircle">
                  <div className="eyePupil" id="pupil2" />
                </div>
              </div>
              {/**EYEs */}
            </div>
            {/**CAT */}

            {/**texts */}

            <div className="loadingTexts">
              <p>
                LOADING MAGIC<span>...</span>
              </p>
              <p>xynes hub</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Loader;
