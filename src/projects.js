import javascript from "./assets/js.png";
import css from "./assets/css.png";
import react from "./assets/react.svg";
import html from "./assets/html.png";
import firebase from "./assets/firebase.png";
import typescript from "./assets/typescript.png";

import weather from "./images/weather.png";
import weatherMobile from "./images/weatherMobile.jpg";
import athlead from "./images/athlead.png";
// mobile athlead
import memorick from "./images/memorick.png";
import memorickMobile from "./images/memorickMobile.jpg";

export default {
  web: [
    {
      id: 1,
      title: "React Weather",
      view: weather,
      mobileView: weatherMobile,
      description:
        "A complete web app where you can look for your city, with a nice and fast way of visualize your Weather information",
      language: [react, javascript, css],
      repo: "https://github.com/roobbs/react-weather",
      website: "https://reactweather-roobbs.netlify.app/",
    },
    {
      id: 2,
      title: "Athlead",
      view: athlead,
      mobileView: "",
      description:
        "Minimalist e-commerce site, where user can look items, add them to cart or favorites and navigate through different pages",
      language: [react, javascript, css],
      repo: "https://github.com/roobbs/shopping-cart",
      website: "https://athlead.vercel.app/",
    },
    {
      id: 3,
      title: "Memorick Game",
      view: memorick,
      mobileView: memorickMobile,
      description:
        "This project is a memory card game to test your memory, you just need to start selecting your cards and remember not to click twice on the same card.",
      language: [react, javascript, css],
      repo: "https://github.com/roobbs/memory-card-app",
      website: "https://memory-card-roobbs.netlify.app",
    },
  ],
  mobile: [
    {
      id: 1,
      title: "SnapPay Bank",
      view: weather,
      description:
        "Crud mobile App made with react native to represent a bank app easy to use, with an attractive UI",
      language: [react, firebase, typescript],
      repo: "https://github.com/roobbs/react-weather",
      website: "https://reactweather-roobbs.netlify.app/",
    },
  ],
};
