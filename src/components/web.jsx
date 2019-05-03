import React, { Component } from "react";
import Quotes from "./quote";
import "./web.css";
import "./pageTwo.css";
import "./pageThree.css";
import "./pageFour.css";
import "./pageFive.css";
import "./pageSix.css";
import "./pageSeven.css";
import "./pageEight.css";
import mp3_file from "../sound/bg~1.mp3";
import whoosh from "../sound/woosh.mp3";

class Web extends Component {
  constructor() {
    super();

    this.state = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      pageNo: 1,
      play: true
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

    this.state.pageNo === 1 &&
      (document.title = "Murakami - Do You Speak Magic");

    this.state.play && document.getElementById("bgSound").play();
  }

  componentDidUpdate() {
    this.state.pageNo === 1 &&
      (document.title = "Murakami - Do You Speak Magic");
    this.state.pageNo === 2 && (document.title = "About Murakami");
    this.state.pageNo === 3 && (document.title = "Kafka on the Shore");
    this.state.pageNo === 4 && (document.title = "The Wind-Up Bird Chronicle");
    this.state.pageNo === 5 && (document.title = "Norwegian Wood");
    this.state.pageNo === 6 && (document.title = "1Q84");
    this.state.pageNo === 7 && (document.title = "Murakami Quotes");
    this.state.pageNo === 8 && (document.title = "Credits");

    setTimeout(
      () =>
        this.state.pageNo === 1 &&
        document.getElementById("one").addEventListener("wheel", e => {
          e.deltaY > 0 && this.state.pageNo === 1 && this.pageOneOut();
        }),
      3600
    );

    setTimeout(
      () =>
        this.state.pageNo === 2 &&
        document.getElementById("two").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 2 && this.pageTwotoOne();
          e.deltaY > 0 && this.state.pageNo === 2 && this.pageTwotoThree();
        }),
      3600
    );

    setTimeout(
      () =>
        this.state.pageNo === 3 &&
        document.getElementById("three").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 3 && this.pageThreetoTwo();
          e.deltaY > 0 && this.state.pageNo === 3 && this.pagethreeToFour();
        }),
      3600
    );

    setTimeout(
      () =>
        this.state.pageNo === 4 &&
        document.getElementById("four").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 4 && this.pageFourToThree();
          e.deltaY > 0 && this.state.pageNo === 4 && this.pageFourToFive();
        }),
      3600
    );

    setTimeout(
      () =>
        this.state.pageNo === 5 &&
        document.getElementById("five").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 5 && this.pageFiveToFour();
          e.deltaY > 0 && this.state.pageNo === 5 && this.pageFiveToSix();
        }),
      3600
    );

    setTimeout(
      () =>
        this.state.pageNo === 6 &&
        document.getElementById("six").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 6 && this.pageSixToFive();
          e.deltaY > 0 && this.state.pageNo === 6 && this.pageSixToSeven();
        }),
      3600
    );

    setTimeout(
      () =>
        this.state.pageNo === 7 &&
        document.getElementById("seven").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 7 && this.pageSevenToSix();
          e.deltaY > 0 && this.state.pageNo === 7 && this.pageSevenToEight();
        }),
      5000
    );

    setTimeout(
      () =>
        this.state.pageNo === 8 &&
        document.getElementById("eight").addEventListener("wheel", e => {
          e.deltaY < 0 && this.state.pageNo === 8 && this.pageEightToSeven();
        }),
      5000
    );

    console.log(this.state.pageNo);
  }

  _onMouseMove = e => {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    this.state.pageNo === 1 && this.pageOneMouseMove();

    this.state.pageNo === 3 && this.pageThreeMouseMove();

    this.state.pageNo === 4 && this.pageFourMouseMove();

    this.state.pageNo === 5 && this.pageFiveMouseMove();

    this.state.pageNo === 6 && this.pageSixMouseMove();
  };

  windowHeight = () => {
    this.setState({ w: window.innerWidth, h: window.innerHeight });
  };

  handleMusic = () => {
    let x = document.getElementById("bgSound");

    this.setState({ play: !this.state.play }, () => {
      this.state.play ? x.play() : x.pause();
    });
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

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1800);
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

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1400);
  };

  pageTwotoThree = () => {
    this.setState({ pageNo: 3 });

    setTimeout(() => this.pageTwoOut(), 100);

    setTimeout(() => this.pageThreeIn(), 2100);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1400);
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
    des.classList.add("tranEaseOut");

    //BOOK IN
    setTimeout(() => book.classList.remove("bookOneImgOut"), 100);

    //SHADOW IN
    setTimeout(() => shadow.classList.remove("bookOneShadowOut"), 150);

    //DES IN
    setTimeout(() => des.classList.remove("DetailsOneOut"), 1100);
    setTimeout(() => des.classList.remove("DetailsOneHeight"), 1400);

    //RED BOX IN
    setTimeout(() => redBox.classList.remove("thirdOut"), 400);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => shadow.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);
  };

  pageThreeOut = () => {
    let pageThree = document.getElementById("three");
    let shadow = document.getElementById("shadowOne");
    let book = document.getElementById("bookOne");
    let des = document.getElementById("bookDes");

    //ADD TRANSITION
    book.classList.add("tranEaseInOutOver");
    shadow.classList.add("tranEaseInOutOver");
    des.classList.add("tranEaseOut");

    //BOOK IN
    setTimeout(() => book.classList.add("bookOneImgOut"), 850);

    //SHADOW IN
    setTimeout(() => shadow.classList.add("bookOneShadowOut"), 800);

    //DES IN
    setTimeout(() => des.classList.add("DetailsOneOut"), 200);
    setTimeout(() => des.classList.add("DetailsOneHeight"), 100);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => shadow.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);
    setTimeout(() => pageThree.classList.add("hide"), 2100);
  };

  pageThreetoTwo = () => {
    let redBox = document.getElementById("redBox");
    this.setState({ pageNo: 2 });

    setTimeout(() => this.pageThreeOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.add("thirdOut"), 900);

    setTimeout(() => this.pageTwoIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 2300);
  };

  pagethreeToFour = () => {
    this.setState({ pageNo: 4 });

    setTimeout(() => this.pageThreeOut(), 100);

    setTimeout(() => this.pageFourIn(), 1800);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1900);
  };

  /**PAGE THREE ANIMATIONS */
  /**PAGE THREE ANIMATIONS */
  /**PAGE THREE ANIMATIONS */

  /**PAGE FOUR ANIMATIONS */
  /**PAGE FOUR ANIMATIONS */
  /**PAGE FOUR ANIMATIONS */
  /**PAGE FOUR ANIMATIONS */

  /**HOVER ANIMATION */
  /**HOVER ANIMATION */
  pageFourMouseMove = () => {
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

    document.getElementById("bookTwo").style.transform =
      "translate(" + left + "px, " + top + "px)";
    document.getElementById("shadowTwo").style.transform =
      "translate(" + sLeft + "px, " + sTop + "px)";
  };
  /**HOVER ANIMATION */
  /**HOVER ANIMATION */

  /**PAGE FOUR IN */
  /**PAGE FOUR IN */

  pageFourIn = () => {
    let pageFour = document.getElementById("four");
    let shadow = document.getElementById("shadowTwo");
    let book = document.getElementById("bookTwo");
    let des = document.getElementById("bookDesTwo");
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    pageFour.classList.remove("hide");

    //ADD TRANSITION
    book.classList.add("tranOverStroke");
    shadow.classList.add("tranOverStroke");
    des.classList.add("tranEaseOut");

    //BOOK IN
    setTimeout(() => book.classList.remove("bookTwoImgOut"), 100);

    //SHADOW IN
    setTimeout(() => shadow.classList.remove("bookTwoShadowOut"), 150);

    //DES IN
    setTimeout(() => des.classList.remove("DetailsTwoOut"), 1100);
    setTimeout(() => des.classList.remove("DetailsTwoHeight"), 1400);

    //RED BOX IN
    setTimeout(() => redBox.classList.add("pageFour"), 100);

    //RED BAR IN
    setTimeout(() => redBar.classList.remove("fourOut"), 200);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => shadow.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);
  };

  /**PAGE FOUR IN */
  /**PAGE FOUR IN */

  /**PAGE FOUR OUT */
  /**PAGE FOUR OUT */

  pageFourOut = () => {
    let pageFour = document.getElementById("four");
    let shadow = document.getElementById("shadowTwo");
    let book = document.getElementById("bookTwo");
    let des = document.getElementById("bookDesTwo");

    //ADD TRANSITION
    book.classList.add("tranEaseInOutOver");
    shadow.classList.add("tranEaseInOutOver");
    des.classList.add("tranEaseOut");

    //BOOK OUT
    setTimeout(() => book.classList.add("bookTwoImgOut"), 850);

    //SHADOW OUT
    setTimeout(() => shadow.classList.add("bookTwoShadowOut"), 800);

    //DES OUT
    setTimeout(() => des.classList.add("DetailsTwoOut"), 200);
    setTimeout(() => des.classList.add("DetailsTwoHeight"), 100);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => shadow.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);

    setTimeout(() => pageFour.classList.add("hide"), 2100);
  };

  /**PAGE FOUR OUT */
  /**PAGE FOUR OUT */

  pageFourToThree = () => {
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    this.setState({ pageNo: 3 });

    setTimeout(() => this.pageFourOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.remove("pageFour"), 900);

    //RED BAR
    setTimeout(() => redBar.classList.add("fourOut"), 700);

    setTimeout(() => this.pageThreeIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 900);
  };

  pageFourToFive = () => {
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    this.setState({ pageNo: 5 });

    setTimeout(() => this.pageFourOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.add("pageFive"), 1800);

    //RED BAR
    setTimeout(() => redBar.classList.add("five"), 1800);

    setTimeout(() => this.pageFiveIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1750);
  };

  /**PAGE FOUR ANIMATIONS */
  /**PAGE FOUR ANIMATIONS */
  /**PAGE FOUR ANIMATIONS */
  /**PAGE FOUR ANIMATIONS */

  /**PAGE FIVE ANIMATIONS */
  /**PAGE FIVE ANIMATIONS */
  /**PAGE FIVE ANIMATIONS */

  /**HOVER ANIMATION */
  /**HOVER ANIMATION */
  pageFiveMouseMove = () => {
    let x = this.state.x;
    let y = this.state.y;
    let w = this.state.w;
    let h = this.state.h;

    let left = x - w / 2;
    let top = y - h / 2;

    let sLeft = left / 75;
    let sTop = top / 75;

    left = -(left / 150);
    top = -(top / 150);

    document.getElementById("bookThree").style.transform =
      "translate(" + left + "px, " + top + "px)";
    document.getElementById("shadowThree").style.transform =
      "translate(" + sLeft + "px, " + sTop + "px)";
  };
  /**HOVER ANIMATION */
  /**HOVER ANIMATION */

  /**PAGE FIVE IN */
  /**PAGE FIVE IN */

  pageFiveIn = () => {
    let pageFive = document.getElementById("five");
    let shadow = document.getElementById("shadowThree");
    let book = document.getElementById("bookThree");
    let des = document.getElementById("bookDesThree");

    pageFive.classList.remove("hide");

    //ADD TRANSITION
    book.classList.add("tranOverStroke");
    shadow.classList.add("tranOverStroke");
    des.classList.add("tranEaseOut");

    //BOOK IN
    setTimeout(() => book.classList.remove("bookThreeImgOut"), 100);

    //SHADOW IN
    setTimeout(() => shadow.classList.remove("bookThreeShadowOut"), 150);

    //DES IN
    setTimeout(() => des.classList.remove("DetailsThreeOut"), 1100);
    setTimeout(() => des.classList.remove("DetailsThreeHeight"), 1300);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => shadow.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);
  };

  /**PAGE FIVE IN */
  /**PAGE FIVE IN */

  /**PAGE FIVE OUT */
  /**PAGE FIVE OUT */

  pageFiveOut = () => {
    let pageFive = document.getElementById("five");
    let shadow = document.getElementById("shadowThree");
    let book = document.getElementById("bookThree");
    let des = document.getElementById("bookDesThree");

    //ADD TRANSITION
    book.classList.add("tranEaseInOutOver");
    shadow.classList.add("tranEaseInOutOver");
    des.classList.add("tranEaseOut");

    //BOOK OUT
    setTimeout(() => book.classList.add("bookThreeImgOut"), 850);

    //SHADOW OUT
    setTimeout(() => shadow.classList.add("bookThreeShadowOut"), 800);

    //DES OUT
    setTimeout(() => des.classList.add("DetailsThreeOut"), 200);
    setTimeout(() => des.classList.add("DetailsThreeHeight"), 100);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => shadow.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);

    setTimeout(() => pageFive.classList.add("hide"), 2100);
  };

  /**PAGE FIVE OUT */
  /**PAGE FIVE OUT */

  pageFiveToFour = () => {
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    this.setState({ pageNo: 4 });

    setTimeout(() => this.pageFiveOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.remove("pageFive"), 1800);

    //RED BAR
    setTimeout(() => redBar.classList.remove("five"), 1800);

    setTimeout(() => this.pageFourIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1750);
  };

  pageFiveToSix = () => {
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    this.setState({ pageNo: 6 });

    setTimeout(() => this.pageFiveOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.add("pageSix"), 1500);

    //RED BAR
    setTimeout(() => redBar.classList.add("six"), 1600);

    setTimeout(() => this.pageSixIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1450);
  };

  /**PAGE FIVE ANIMATIONS */
  /**PAGE FIVE ANIMATIONS */
  /**PAGE FIVE ANIMATIONS */
  /**PAGE FIVE ANIMATIONS */

  /**PAGE SIX ANIMATIONS */
  /**PAGE SIX ANIMATIONS */
  /**PAGE SIX ANIMATIONS */
  /**PAGE SIX ANIMATIONS */

  /**HOVER ANIMATION */
  /**HOVER ANIMATION */
  pageSixMouseMove = () => {
    let x = this.state.x;
    let y = this.state.y;
    let w = this.state.w;
    let h = this.state.h;

    let left = x - w / 2;
    let top = y - h / 2;

    let sLeft = 5 + left / 75;
    let sTop = top / 75;

    left = -(left / 150);
    top = -(top / 150);

    document.getElementById("bookFour").style.transform =
      "translate(" + left + "px, " + top + "px)";
    document.getElementById("shadowFour").style.transform =
      "translate(" + sLeft + "px, " + sTop + "px)";
  };
  /**HOVER ANIMATION */
  /**HOVER ANIMATION */

  /**PAGE SIX IN */
  /**PAGE SIX IN */

  pageSixIn = () => {
    let pageSix = document.getElementById("six");
    let shadow = document.getElementById("shadowFour");
    let book = document.getElementById("bookFour");
    let des = document.getElementById("bookDesFour");

    pageSix.classList.remove("hide");

    //ADD TRANSITION
    book.classList.add("tranOverStroke");
    shadow.classList.add("tranOverStroke");
    des.classList.add("tranEaseOut");

    //BOOK IN
    setTimeout(() => book.classList.remove("bookFourImgOut"), 100);

    //SHADOW IN
    setTimeout(() => shadow.classList.remove("bookFourShadowOut"), 150);

    //DES IN
    setTimeout(() => des.classList.remove("DetailsFourOut"), 900);
    setTimeout(() => des.classList.remove("DetailsFourHeight"), 1200);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => shadow.classList.remove("tranOverStroke"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);
  };

  /**PAGE SIX IN */
  /**PAGE SIX IN */

  /**PAGE SIX OUT */
  /**PAGE SIX OUT */

  pageSixOut = () => {
    let pageSix = document.getElementById("six");
    let shadow = document.getElementById("shadowFour");
    let book = document.getElementById("bookFour");
    let des = document.getElementById("bookDesFour");

    //ADD TRANSITION
    book.classList.add("tranEaseInOutOver");
    shadow.classList.add("tranEaseInOutOver");
    des.classList.add("tranEaseOut");

    //BOOK OUT
    setTimeout(() => book.classList.add("bookFourImgOut"), 850);

    //SHADOW OUT
    setTimeout(() => shadow.classList.add("bookFourShadowOut"), 800);

    //DES OUT
    setTimeout(() => des.classList.add("DetailsFourOut"), 200);
    setTimeout(() => des.classList.add("DetailsFourHeight"), 100);

    //REMOVE TRANSITION
    setTimeout(() => book.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => shadow.classList.remove("tranEaseInOutOver"), 2000);
    setTimeout(() => des.classList.remove("tranEaseOut"), 2000);

    setTimeout(() => pageSix.classList.add("hide"), 2100);
  };

  /**PAGE Six OUT */
  /**PAGE Six OUT */

  pageSixToFive = () => {
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    this.setState({ pageNo: 5 });

    setTimeout(() => this.pageSixOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.remove("pageSix"), 1200);

    //RED BAR
    setTimeout(() => redBar.classList.remove("six"), 1200);

    setTimeout(() => this.pageFiveIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 1150);
  };

  pageSixToSeven = () => {
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    this.setState({ pageNo: 7 });

    setTimeout(() => this.pageSixOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.add("pageSeven"), 1200);

    //RED BAR
    setTimeout(() => redBar.classList.add("seven"), 1200);

    setTimeout(() => this.sevenIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 2950);
  };

  /**PAGE SIX ANIMATIONS */
  /**PAGE SIX ANIMATIONS */
  /**PAGE SIX ANIMATIONS */
  /**PAGE SIX ANIMATIONS */

  /**PAGE SEVEN ANIMATIONS */
  /**PAGE SEVEN ANIMATIONS */
  /**PAGE SEVEN ANIMATIONS */
  /**PAGE SEVEN ANIMATIONS */

  sevenIn = () => {
    let page = document.getElementById("seven");
    let redCard = document.getElementById("redCard");
    let SevenGreen = document.getElementById("SevenGreen");
    let quoteTxt = document.getElementById("quoteTxt");

    let fcfb = document.getElementById("fcfb");
    let fcinsta = document.getElementById("fcinsta");
    let fctweet = document.getElementById("fctweet");

    page.classList.remove("hide");

    //RED CARD IN
    setTimeout(() => {
      redCard.classList.remove("QuoteCardOut");
    }, 100);

    //RED CARD TEXT
    setTimeout(() => {
      redCard.classList.remove("quotecardText");
    }, 750);

    //GREEN OVERLAY
    setTimeout(() => {
      SevenGreen.classList.add("active");
    }, 750);

    //QUOTE
    setTimeout(() => {
      quoteTxt.classList.remove("fade");
    }, 1250);

    //SOCIAL ICONS
    setTimeout(() => {
      fcfb.classList.remove("out");
    }, 1750);
    setTimeout(() => {
      fcinsta.classList.remove("out");
    }, 1900);
    setTimeout(() => {
      fctweet.classList.remove("out");
    }, 2050);
  };

  /**SEVEN OUT */
  /**SEVEN OUT */

  sevenOut = () => {
    let page = document.getElementById("seven");
    let redCard = document.getElementById("redCard");
    let SevenGreen = document.getElementById("SevenGreen");
    let quoteTxt = document.getElementById("quoteTxt");

    let fcfb = document.getElementById("fcfb");
    let fcinsta = document.getElementById("fcinsta");
    let fctweet = document.getElementById("fctweet");

    //RED CARD IN
    setTimeout(() => {
      redCard.classList.add("QuoteCardOut");
    }, 1400);

    //RED CARD TEXT
    setTimeout(() => {
      redCard.classList.add("quotecardText");
    }, 800);

    //GREEN OVERLAY
    setTimeout(() => {
      SevenGreen.classList.remove("active");
    }, 800);

    //QUOTE
    setTimeout(() => {
      quoteTxt.classList.add("fade");
    }, 300);

    //SOCIAL ICONS
    setTimeout(() => {
      fcfb.classList.add("out");
    }, 100);
    setTimeout(() => {
      fcinsta.classList.add("out");
    }, 200);
    setTimeout(() => {
      fctweet.classList.add("out");
    }, 300);

    setTimeout(() => page.classList.add("hide"), 2100);
  };

  /**SEVEN OUT */
  /**SEVEN OUT */

  pageSevenToSix = () => {
    let redBox = document.getElementById("redBox");
    let redBar = document.getElementById("redBar");

    this.setState({ pageNo: 6 });

    setTimeout(() => this.sevenOut(), 100);

    //RED BOX IN
    setTimeout(() => redBox.classList.remove("pageSeven"), 2100);

    //RED BAR
    setTimeout(() => redBar.classList.remove("seven"), 2100);

    setTimeout(() => this.pageSixIn(), 2200);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 850);
  };

  pageSevenToEight = () => {
    this.setState({ pageNo: 8 });

    setTimeout(() => this.sevenOut(), 100);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 850);

    setTimeout(() => this.eightIn(), 2200);
  };

  /**PAGE SEVEN ANIMATIONS */
  /**PAGE SEVEN ANIMATIONS */
  /**PAGE SEVEN ANIMATIONS */
  /**PAGE SEVEN ANIMATIONS */

  /**PAGE EIGHT ANIMATION */
  /**PAGE EIGHT ANIMATION */
  /**PAGE EIGHT ANIMATION */
  /**PAGE EIGHT ANIMATION */

  /**eight in */

  eightIn = () => {
    let page = document.getElementById("eight");
    let redShape = document.getElementById("redShape");
    let concept = document.getElementById("concept");
    let redLines = document.getElementById("redLines");

    let name = document.getElementById("name");
    let des = document.getElementById("des");

    let ncGit = document.getElementById("ncGit");
    let ncTwt = document.getElementById("ncTwt");
    let ncInst = document.getElementById("ncInst");
    let ncFb = document.getElementById("ncFb");

    page.classList.remove("hide");

    //RED SHAPE IN
    setTimeout(() => redShape.classList.remove("redShapeOut"), 100);

    //CONCEPT
    setTimeout(() => concept.classList.remove("conceptOut"), 500);

    //REDLINES IN
    setTimeout(() => redLines.classList.remove("redLinesOut"), 600);
    setTimeout(() => redLines.classList.remove("redLinesWidth"), 900);

    //NAME
    setTimeout(() => name.classList.remove("nameOut"), 1400);

    //DES
    setTimeout(() => des.classList.remove("desOut"), 2000);

    //SOCIAL
    setTimeout(() => ncGit.classList.remove("ncSocialIcnOut"), 2600);
    setTimeout(() => ncTwt.classList.remove("ncSocialIcnOut"), 2700);
    setTimeout(() => ncInst.classList.remove("ncSocialIcnOut"), 2800);
    setTimeout(() => ncFb.classList.remove("ncSocialIcnOut"), 2900);
  };

  /**eight in */

  /**eight out */

  eightOut = () => {
    let page = document.getElementById("eight");
    let redShape = document.getElementById("redShape");
    let concept = document.getElementById("concept");
    let redLines = document.getElementById("redLines");

    let name = document.getElementById("name");
    let des = document.getElementById("des");

    let ncGit = document.getElementById("ncGit");
    let ncTwt = document.getElementById("ncTwt");
    let ncInst = document.getElementById("ncInst");
    let ncFb = document.getElementById("ncFb");

    //RED SHAPE OUT
    setTimeout(() => redShape.classList.add("redShapeOut"), 2500);

    //CONCEPT
    setTimeout(() => concept.classList.add("conceptOut"), 2100);

    //REDLINES OUT
    setTimeout(() => redLines.classList.add("redLinesOut"), 2300);
    setTimeout(() => redLines.classList.add("redLinesWidth"), 2100);

    //NAME
    setTimeout(() => name.classList.add("nameOut"), 1550);

    //DES
    setTimeout(() => des.classList.add("desOut"), 1000);

    //SOCIAL
    setTimeout(() => ncGit.classList.add("ncSocialIcnOut"), 100);
    setTimeout(() => ncTwt.classList.add("ncSocialIcnOut"), 200);
    setTimeout(() => ncInst.classList.add("ncSocialIcnOut"), 300);
    setTimeout(() => ncFb.classList.add("ncSocialIcnOut"), 400);

    setTimeout(() => page.classList.add("hide"), 3150);
  };

  /**eight out */

  pageEightToSeven = () => {
    this.setState({ pageNo: 7 });

    setTimeout(() => this.eightOut(), 100);

    setTimeout(() => this.sevenIn(), 3300);

    this.state.play &&
      setTimeout(() => document.getElementById("whoosh").play(), 4000);
  };

  /**PAGE EIGHT ANIMATION */
  /**PAGE EIGHT ANIMATION */
  /**PAGE EIGHT ANIMATION */
  /**PAGE EIGHT ANIMATION */

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

          {/**PAGE FOUR */}
          {/**PAGE FOUR */}
          {/**PAGE FOUR */}

          {this.state.pageNo >= 3 && (
            <>
              <div className="page hide" id="four">
                {/**BOOK IMAGE AND SHADOW */}

                <div className="bookOneImgSec BookTwo">
                  <div
                    className="bookTwoShadow bookTwoShadowOut"
                    id="shadowTwo"
                  />
                  <div
                    className={
                      this.state.h > 1080
                        ? "bookTwoImg2160 bookTwoImgOut"
                        : "bookTwoImg1080 bookTwoImgOut"
                    }
                    id="bookTwo"
                  />
                </div>

                {/**BOOK IMAGE AND SHADOW */}

                {/** BOOK DETAILS*/}
                {/** BOOK DETAILS*/}
                <div
                  className="BookDetals DetailsTwo DetailsTwoHeight DetailsTwoOut"
                  id="bookDesTwo"
                >
                  <p>
                    the Wind-Up Bird
                    <br />
                    Chronicle
                  </p>
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

          {/**PAGE FOUR */}
          {/**PAGE FOUR */}
          {/**PAGE FOUR */}

          {/**PAGE FIVE */}
          {/**PAGE FIVE */}
          {/**PAGE FIVE */}

          {this.state.pageNo >= 4 && (
            <>
              <div className="page hide" id="five">
                {/**BOOK IMAGE AND SHADOW */}

                <div className="bookOneImgSec bookThree">
                  <div
                    className="bookThreeShadow bookThreeShadowOut"
                    id="shadowThree"
                  />
                  <div
                    className={
                      this.state.h > 1080
                        ? "bookThreeImg2160 bookThreeImgOut"
                        : "bookThreeImg1080 bookThreeImgOut"
                    }
                    id="bookThree"
                  />
                </div>

                {/**BOOK IMAGE AND SHADOW */}

                {/** BOOK DETAILS*/}
                {/** BOOK DETAILS*/}
                <div
                  className="BookDetals DetailsThree DetailsThreeHeight DetailsThreeOut"
                  id="bookDesThree"
                >
                  <p>Norwegian Wood</p>
                  <p>
                    When he hears her favourite Beatles song, Toru Watanabe
                    recalls his first love Naoko, the girlfriend of his best
                    friend Kizuki.
                  </p>
                  <p>
                    <span>Originally published:</span> 1987
                  </p>
                  <p>
                    <span>Page count:</span> 296
                  </p>
                </div>
                {/** BOOK DETAILS*/}
                {/** BOOK DETAILS*/}
              </div>
            </>
          )}

          {/**PAGE FIVE */}
          {/**PAGE FIVE */}
          {/**PAGE FIVE */}

          {/**PAGE SIX */}
          {/**PAGE SIX */}
          {/**PAGE SIX */}

          {this.state.pageNo >= 5 && (
            <>
              <div className="page hide" id="six">
                {/**BOOK IMAGE AND SHADOW */}

                <div className="bookOneImgSec bookFour">
                  <div
                    className="bookFourShadow bookFourShadowOut"
                    id="shadowFour"
                  />
                  <div
                    className={
                      this.state.h > 1080
                        ? "bookFourImg2160 bookFourImgOut"
                        : "bookFourImg1080 bookFourImgOut"
                    }
                    id="bookFour"
                  />
                </div>

                {/**BOOK IMAGE AND SHADOW */}

                {/** BOOK DETAILS*/}
                {/** BOOK DETAILS*/}
                <div
                  className="BookDetals DetailsFour DetailsFourHeight DetailsFourOut"
                  id="bookDesFour"
                >
                  <p>1Q84</p>
                  <p>
                    This is the real world, there is no doubt about that. But in
                    this world, there are two moons in the sky.
                  </p>
                  <p>
                    <span>Originally published:</span> 29 May 2009
                  </p>
                  <p>
                    <span>Page count:</span> 928
                  </p>
                </div>
                {/** BOOK DETAILS*/}
                {/** BOOK DETAILS*/}
              </div>
            </>
          )}

          {/**PAGE SIX */}
          {/**PAGE SIX */}
          {/**PAGE SIX */}

          {/**PAGE SIX */}
          {/**PAGE SIX */}
          {/**PAGE SIX */}

          {this.state.pageNo >= 6 && (
            <>
              <div className="page hide" id="seven">
                {/**BACK IMAGE */}

                <div className="murakamiImgSec">
                  <div
                    className={
                      this.state.h > 1080
                        ? "murakamiBackImg2160"
                        : "murakamiBackImg1080"
                    }
                  />
                  <div className="murakamiBackImgOverlay" />
                </div>

                {/**BACK IMAGE */}

                {/**QUOTES */}
                <p className="Quotes fade tranEaseInOutSine" id="quoteTxt">
                  Quotes
                </p>
                {/**QUOTES */}

                {/**Overlay */}
                <div className="fullscreenOverlay" />
                {/**Overlay */}

                {/**GREEN OVERLAY */}
                <div
                  className="GreenOverlay tranEaseInOutSine"
                  id="SevenGreen"
                />
                {/**GREEN OVERLAY */}

                {/**QUOTE CARD */}
                <div className="QuoteCards">
                  <div className="QuoteCard" />
                  <div
                    className="QuoteCard QuoteCardOut quotecardText"
                    id="redCard"
                  >
                    <Quotes />
                  </div>
                </div>
                {/**QUOTE CARD */}

                {/**SOCIAL MEDIA */}
                <div className="fanClub facClubOut" id="fanClub">
                  <a
                    href="https://www.facebook.com/MurakamiFanClub/"
                    target="_blank"
                  >
                    <div
                      className="SocialIcns fb out"
                      id="fcfb"
                      title="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/MurakamiFanClub/"
                    target="_blank"
                  >
                    <div
                      className="SocialIcns insta out"
                      id="fcinsta"
                      title="Instagram"
                    />
                  </a>
                  <a href="https://twitter.com/MurakamiFanClub" target="_blank">
                    <div
                      className="SocialIcns tweet out"
                      id="fctweet"
                      title="twitter"
                    />
                  </a>
                </div>
                {/**SOCIAL MEDIA */}
              </div>
            </>
          )}

          {/**PAGE SIX */}
          {/**PAGE SIX */}
          {/**PAGE SIX */}

          {/**PAGE EIGHT */}
          {/**PAGE EIGHT */}
          {/**PAGE EIGHT */}
          {/**PAGE EIGHT */}

          {this.state.pageNo >= 7 && (
            <>
              <div className="page hide" id="eight">
                {/* BANNER */}
                <div
                  className="concept tranEaseInOutSine conceptOut"
                  id="concept"
                >
                  <p>Concept</p>
                  <p>
                    Des<span>i</span>&nbsp;gned
                  </p>
                  <p>by</p>
                </div>
                {/* BANNER */}

                {/**FULL */}
                <div className="eightFull" />
                {/**FULL */}

                {/**RED LINES */}
                <div
                  className="redLines tranEaseInOutSine redLinesWidth redLinesOut"
                  id="redLines"
                >
                  <div className="redline tranEaseInOutSine" />
                  <div className="redline tranEaseInOutSine" />
                </div>
                {/**RED LINES */}

                {/**RED SHAPE BACK */}
                <div
                  className="redShape tranEaseInOutSine redShapeOut"
                  id="redShape"
                />
                {/**RED SHAPE BACK */}

                {/**NAME CARD */}
                <div className="nameCard">
                  <p className="name tranEaseInOutSine nameOut" id="name">
                    Ray Da Junior
                  </p>
                  <p className="des tranEaseInOutSine desOut" id="des">
                    CREATIVE DIRECTOR <span>XYNES HUB</span>
                  </p>
                  <div className="socialIcons">
                    <a href="https://github.com/xynes-hub" target="_blank">
                      <div
                        className="ncSocialIcn tranEaseInOutSine git ncSocialIcnOut"
                        id="ncGit"
                      />
                    </a>

                    <a href="https://twitter.com/admin_xynes" target="_blank">
                      <div
                        className="ncSocialIcn tranEaseInOutSine tweet ncSocialIcnOut"
                        id="ncTwt"
                      />
                    </a>

                    <a
                      href="https://instagram.com/archan.ray2011"
                      target="_blank"
                    >
                      <div
                        className="ncSocialIcn tranEaseInOutSine insta ncSocialIcnOut"
                        id="ncInst"
                      />
                    </a>

                    <a
                      href="https://www.facebook.com/raydajunior"
                      target="_blank"
                    >
                      <div
                        className="ncSocialIcn tranEaseInOutSine fb ncSocialIcnOut"
                        id="ncFb"
                      />
                    </a>
                  </div>
                </div>
                {/**NAME CARD */}
              </div>
            </>
          )}

          {/**PAGE EIGHT */}
          {/**PAGE EIGHT */}
          {/**PAGE EIGHT */}
          {/**PAGE EIGHT */}

          {/**RED BOX */}
          {/**RED BOX */}
          {this.state.pageNo >= 2 && (
            <>
              <div className="redBox three thirdOut" id="redBox" />
            </>
          )}
          {/**RED BOX */}
          {/**RED BOX */}

          {/**RED BAR */}
          {/**RED BAR */}

          {this.state.pageNo >= 3 && (
            <>
              <div className="redBar four fourOut" id="redBar" />
            </>
          )}

          {/**RED BAR */}
          {/**RED BAR */}

          {/**AUDIO */}
          {/**AUDIO */}
          <audio src={mp3_file} type="audio/mp3" id="bgSound" autoPlay loop />
          <audio src={whoosh} type="audio/mp3" id="whoosh" autoPlay={false} />
          {/**AUDIO */}
          {/**AUDIO */}

          <div
            className={this.state.play ? "music" : "musicOff"}
            onClick={this.handleMusic}
          />
        </div>
      </>
    );
  }
}

export default Web;
