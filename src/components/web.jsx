import React, { Component } from "react";
import "./web.css";
import "./pageTwo.css";
import "./pageThree.css";

class Web extends Component {
  constructor() {
    super();

    this.state = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      pageNo: 1
    };
  }

  componentDidMount() {
    this.windowHeight();
    window.addEventListener("resize", this.windowHeight());

    this.state.pageNo === 1 &&
      setTimeout(
        () =>
          document.getElementById("one").addEventListener("wheel", e => {
            e.deltaY > 0 && this.state.pageNo === 1 && this.pageOneOut();
          }),
        500
      );
  }

  componentDidUpdate() {
    setTimeout(
      () =>
        document.getElementById("one").addEventListener("wheel", e => {
          e.deltaY > 0 && this.state.pageNo === 1 && this.pageOneOut();
        }),
      3600
    );

    setTimeout(
      () =>
        document.getElementById("two").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 2 && this.pageTwotoOne();
          e.deltaY > 0 && this.state.pageNo === 2 && this.pageTwotoThree();
        }),
      3600
    );

    console.log(this.state.pageNo);
  }

  _onMouseMove = e => {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    this.state.pageNo === 1 && this.pageOneMouseMove();

    this.state.pageNo === 3 && this.pageThreeMouseMove();
  };

  windowHeight = () => {
    this.setState({ w: window.innerWidth, h: window.innerHeight });
  };

  //PAGE ONE ANIMATIONS
  //PAGE ONE ANIMATIONS
  //PAGE ONE ANIMATIONS
  //PAGE ONE ANIMATIONS

  pageOneMouseMove = () => {
    let x = this.state.x;
    let y = this.state.y;
    let w = this.state.w;
    let h = this.state.h;

    let top = y - h / 2;
    let left = x - w / 2;

    let banLeft = left / 400;
    let outLeft = left / 700;
    top = -(top / 200);
    left = -(left / 200);

    document.getElementById("bannerText").style.top = "" + top + "px";
    document.getElementById("bannerText").style.left = "" + left + "px";
    document.getElementById("bannerImg").style.transform =
      "translateX(" + banLeft + "px)";
    document.getElementById("bannerOut").style.transform =
      "translateX(" + outLeft + "px)";
  };

  pageOneOut = () => {
    this.setState({ pageNo: 2 });

    let pageOne = document.getElementById("one");
    let cat = document.getElementById("cat");
    let bannerText = document.getElementById("bannerText");
    let bannerOut = document.getElementById("bannerOut");
    let bannerImg = document.getElementById("bannerImg");
    let gText = document.getElementById("gText");

    cat.classList.add("tranEaseOut");
    bannerText.classList.add("tranEaseOut");
    bannerOut.classList.add("tranEaseOut");
    bannerImg.classList.add("tranEaseOut");
    gText.classList.add("tranEaseOut");

    //TEXT OUT
    setTimeout(() => bannerText.classList.add("banerTextEaseOut"), 300);
    setTimeout(() => bannerText.classList.add("FadeOut"), 700);

    //IMAGE OUT
    setTimeout(() => bannerImg.classList.add("bannerImageOut"), 700);
    setTimeout(() => bannerImg.classList.add("FadeOut"), 1150);

    //OUTLINE OUT
    setTimeout(() => bannerOut.classList.add("bannerImageOut"), 800);
    setTimeout(() => bannerOut.classList.add("FadeOut"), 1250);

    //G OUT
    setTimeout(() => gText.classList.add("Gout"), 1000);

    //CAT OUT
    setTimeout(() => cat.classList.add("backCatOut"), 1000);
    setTimeout(() => cat.classList.add("FadeOut"), 1500);

    //PAGE ONE HIDE
    setTimeout(() => pageOne.classList.add("hide"), 1600);

    //REMOVE TRANSITION
    setTimeout(() => cat.classList.remove("tranEaseOut"), 1600);
    setTimeout(() => bannerText.classList.remove("tranEaseOut"), 1600);
    setTimeout(() => bannerOut.classList.remove("tranEaseOut"), 1600);
    setTimeout(() => bannerImg.classList.remove("tranEaseOut"), 1600);
    setTimeout(() => gText.classList.remove("tranEaseOut"), 1600);

    //PAGE TWO IN
    setTimeout(() => this.pageTwoIn(), 1700);
  };

  pageOneIn = () => {
    let pageOne = document.getElementById("one");
    let cat = document.getElementById("cat");
    let bannerText = document.getElementById("bannerText");
    let bannerOut = document.getElementById("bannerOut");
    let bannerImg = document.getElementById("bannerImg");
    let gText = document.getElementById("gText");

    pageOne.classList.remove("hide");

    cat.classList.add("tranEaseOut");
    bannerText.classList.add("tranOverStroke");
    bannerOut.classList.add("tranEaseOut");
    bannerImg.classList.add("tranEaseOut");
    gText.classList.add("tranEaseOut");

    //TEXT IN
    setTimeout(() => bannerText.classList.remove("banerTextEaseOut"), 1350);
    setTimeout(() => bannerText.classList.remove("FadeOut"), 1300);

    //IMAGE IN
    setTimeout(() => bannerImg.classList.remove("bannerImageOut"), 800);
    setTimeout(() => bannerImg.classList.remove("FadeOut"), 750);

    //OUTLINE IN
    setTimeout(() => bannerOut.classList.remove("bannerImageOut"), 750);
    setTimeout(() => bannerOut.classList.remove("FadeOut"), 700);

    //G IN
    setTimeout(() => gText.classList.remove("Gout"), 200);

    //CAT IN
    setTimeout(() => cat.classList.remove("backCatOut"), 200);
    setTimeout(() => cat.classList.remove("FadeOut"), 100);

    //REMOVE TRANSITION
    setTimeout(() => cat.classList.remove("tranEaseOut"), 1600);
    setTimeout(() => bannerText.classList.remove("tranOverStroke"), 1600);
    setTimeout(() => bannerOut.classList.remove("tranEaseOut"), 1600);
    setTimeout(() => bannerImg.classList.remove("tranEaseOut"), 1600);
    setTimeout(() => gText.classList.remove("tranEaseOut"), 1600);
  };

  //PAGE ONE ANIMATIONS
  //PAGE ONE ANIMATIONS
  //PAGE ONE ANIMATIONS
  //PAGE ONE ANIMATIONS

  //PAGE TWO ANIMATIONS
  //PAGE TWO ANIMATIONS
  //PAGE TWO ANIMATIONS
  //PAGE TWO ANIMATIONS

  pageTwoIn = () => {
    let pageTwo = document.getElementById("two");
    let overlay = document.getElementById("greenOverlay");
    let name = document.getElementById("aboutName");
    let des = document.getElementById("aboutDes");
    let sign = document.getElementById("sign");
    let para = document.getElementById("para");

    pageTwo.classList.remove("hide");

    //ADD TRANSITION
    overlay.classList.add("tranEaseInOutSine");
    name.classList.add("tranEaseOut");
    des.classList.add("tranEaseInOutSine");
    sign.classList.add("tranEaseOut");
    para.classList.add("tranEaseOut");

    //OVERLAY ACTIVE
    setTimeout(() => overlay.classList.add("active"), 100);

    //NAME IN
    setTimeout(() => name.classList.remove("aboutImgTextOut"), 600);

    //DESCRIPTION TILE IN
    setTimeout(() => des.classList.remove("aboutDesSecOut"), 700);

    setTimeout(() => des.classList.remove("aboutText"), 1150);

    //SIGN FADE IN
    setTimeout(() => sign.classList.remove("FadeOut"), 1500);
  };

  pageTwoOut = () => {
    let pageTwo = document.getElementById("two");
    let overlay = document.getElementById("greenOverlay");
    let name = document.getElementById("aboutName");
    let des = document.getElementById("aboutDes");
    let sign = document.getElementById("sign");
    let para = document.getElementById("para");

    //OVERLAY InACTIVE
    setTimeout(() => overlay.classList.remove("active"), 1400);

    //NAME OUT
    setTimeout(() => name.classList.add("aboutImgTextOut"), 1300);

    //DESCRIPTION TILE OUT
    setTimeout(() => des.classList.add("aboutDesSecOut"), 800);

    setTimeout(() => des.classList.add("aboutText"), 400);

    //SIGN FADE OUT
    setTimeout(() => sign.classList.add("FadeOut"), 100);

    //ADDING DISPLAY NONE
    setTimeout(() => pageTwo.classList.add("hide"), 2000);
  };

  pageTwotoOne = () => {
    this.setState({ pageNo: 1 });

    setTimeout(() => this.pageTwoOut(), 100);
    setTimeout(() => this.pageOneIn(), 2100);

    console.log("pageOne Called");
  };

  pageTwotoThree = () => {
    this.setState({ pageNo: 3 });

    setTimeout(() => this.pageTwoOut(), 100);
    setTimeout(() => this.pageThreeIn(), 2100);

    console.log("pageThree Called");
  };

  //PAGE TWO ANIMATIONS
  //PAGE TWO ANIMATIONS
  //PAGE TWO ANIMATIONS
  //PAGE TWO ANIMATIONS

  /**PAGE THREE ANIMATIONS */
  /**PAGE THREE ANIMATIONS */
  /**PAGE THREE ANIMATIONS */

  pageThreeMouseMove = () => {
    let x = this.state.x;
    let y = this.state.y;
    let w = this.state.w;
    let h = this.state.h;

    let left = x - h / 2;
    let top = y - h / 2;

    let sLeft = -(left / 100);
    let sTop = -(top / 100);

    left = left / 200;
    top = top / 200;

    document.getElementById("bookOne").style.transform =
      "translate(" + left + "px, " + top + "px)";
    document.getElementById("shadowOne").style.transform =
      "translate(" + sLeft + "px, " + sTop + "px)";
  };

  pageThreeIn = () => {
    let pageThree = document.getElementById("three");
    let shadow = document.getElementById("shadowOne");
    let book = document.getElementById("bookOne");
    let des = document.getElementById("bookDes");
    let redBox = document.getElementById("redBox");

    pageThree.classList.remove("hide");

    //ADD TRANSITION
    book.classList.add("tranOverStroke");
    shadow.classList.add("tranOverStroke");
    book.classList.add("tranOverStroke");
    des.classList.add("tranEaseOut");

    //BOOK IN
    setTimeout(() => book.classList.remove("bookOneImgOut"), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.remove("thirdOut"), 200);

    //SHADOW IN
    setTimeout(() => shadow.classList.remove("bookOneShadowOut"), 300);

    //DES IN
    setTimeout(() => des.classList.remove("DetailsOneOut"), 1100);
    setTimeout(() => des.classList.remove("DetailsOneHeight"), 1400);
  };

  /**PAGE THREE ANIMATIONS */
  /**PAGE THREE ANIMATIONS */
  /**PAGE THREE ANIMATIONS */

  render() {
    return (
      <>
        <div className="container" onMouseMove={this._onMouseMove}>
          {/**FIRST PAGE */}
          {/**FIRST PAGE */}
          {/**FIRST PAGE */}

          {this.state.pageNo > 0 && (
            <>
              <div className="page" id="one">
                {/**CAT */}
                {/**CAT */}
                <div className="backCatSec" id="cat">
                  <div className="catIMG" />
                  <div className="secondColor" />
                </div>
                {/**CAT */}
                {/**CAT */}

                {/**TEXT */}
                {/**TEXT */}

                <div className="bannerTextSec" id="bannerText">
                  <div className="bannerTextTop">
                    <p>DO YOU</p>
                    <p>SPEAK</p>
                  </div>
                  <div className="bannerTextBtm">
                    <p>
                      M&nbsp;&nbsp;A&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      I&nbsp;&nbsp;C
                    </p>
                  </div>
                </div>
                <p className="G" id="gText">
                  G
                </p>

                {/**TEXT */}
                {/**TEXT */}

                {/**MURAKAMI IMG */}
                {/**MURAKAMI IMG */}
                <div className="bannerImgSec">
                  <div className="bannerOutline" id="bannerOut" />
                  <div
                    className={
                      this.state.h > 1080 ? "bannerImg2160" : "bannerImg1080"
                    }
                    id="bannerImg"
                  />
                </div>
                {/**MURAKAMI IMG */}
                {/**MURAKAMI IMG */}
              </div>
            </>
          )}

          {/**FIRST PAGE */}
          {/**FIRST PAGE */}
          {/**FIRST PAGE */}

          {/**SECOND PAGE */}
          {/**SECOND PAGE */}
          {/**SECOND PAGE */}

          {this.state.pageNo >= 1 && (
            <>
              <div className="page hide" id="two">
                {/**IMAGE */}
                {/**IMAGE */}
                <div className="aboutImageSec">
                  <div className="MurakamiImg" />
                  <div className="ImgOverlay" />
                  <div className="aboutImgText aboutImgTextOut" id="aboutName">
                    <p>
                      H&nbsp;A&nbsp;R&nbsp;U&nbsp;K&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;U&nbsp;R&nbsp;A&nbsp;K&nbsp;A&nbsp;M&nbsp;I
                    </p>
                  </div>
                </div>
                {/**IMAGE */}
                {/**IMAGE */}

                {/**OVERLAY */}
                <div
                  className="pageTwoOverlayGreen tranEaseOut"
                  id="greenOverlay"
                />
                {/**OVERLAY */}

                {/**ABOUT MURAKAMI */}
                {/**ABOUT MURAKAMI */}
                <div
                  className="aboutDesSec aboutDesSecOut aboutText"
                  id="aboutDes"
                >
                  <p id="para">
                    Haruki Murakami was born in <span>Kyoto</span> in{" "}
                    <span>1949</span> and now lives near <span>Tokyo</span>. He
                    is the author of many novels as well as short stories and
                    non-fiction. His books include{" "}
                    <span>
                      Norwegian Wood, The Wind-Up Bird Chronicle, Kafka on the
                      Shore, 1Q84
                    </span>{" "}
                    and <span>What I Talk About When I Talk About Running</span>
                    . His work has been translated into more than fifty
                    languages, and his many international honours includes the
                    Jerusalem Prize.
                  </p>
                  <div className="MurakamiSign FadeOut" id="sign">
                    <div className="murakamiSignImg" />
                  </div>
                </div>
                {/**ABOUT MURAKAMI */}
                {/**ABOUT MURAKAMI */}
              </div>
            </>
          )}

          {/**SECOND PAGE */}
          {/**SECOND PAGE */}
          {/**SECOND PAGE */}

          {/**THIRD PAGE */}
          {/**THIRD PAGE */}
          {/**THIRD PAGE */}
          {this.state.pageNo >= 2 && (
            <>
              <div className="page hide" id="three">
                {/**BOOK IMAGE AND SHADOW */}

                <div className="bookOneImgSec">
                  <div
                    className="bookOneShadow bookOneShadowOut"
                    id="shadowOne"
                  />
                  <div
                    className={
                      this.state.h > 1080
                        ? "bookOneImg2160 bookOneImgOut"
                        : "bookOneImg1080 bookOneImgOut"
                    }
                    id="bookOne"
                  />
                </div>

                {/**BOOK IMAGE AND SHADOW */}

                {/** BOOK DETAILS*/}
                {/** BOOK DETAILS*/}
                <div
                  className="BookDetals DetailsOne DetailsOneHeight DetailsOneOut"
                  id="bookDes"
                >
                  <p>Kafka on the Shore</p>
                  <p>
                    Cats converse with people; fish tumble from the sky... A
                    bewitching and wildly inventive novel from a master stylist.
                  </p>
                  <p>
                    <span>Originally published:</span> 12 September 2002
                  </p>
                  <p>
                    <span>Page count:</span> 505
                  </p>
                </div>
                {/** BOOK DETAILS*/}
                {/** BOOK DETAILS*/}
              </div>
            </>
          )}
          {/**THIRD PAGE */}
          {/**THIRD PAGE */}
          {/**THIRD PAGE */}

          {/**RED BOX */}
          {/**RED BOX */}
          {this.state.pageNo >= 3 && (
            <>
              <div className="redBox three thirdOut" id="redBox" />
            </>
          )}
          {/**RED BOX */}
          {/**RED BOX */}
        </div>
      </>
    );
  }
}

export default Web;
