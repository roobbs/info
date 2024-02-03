import javascript from "./assets/js.png";
import css from "./assets/css.png";
import react from "./assets/react.svg";

import weather from "./images/weather.png";
import weatherMobile from "./images/weatherMobile.jpg";
import etch from "./images/etch.png";
import etchMobile from "./images/etchMobile.jpg";
import memorick from "./images/memorick.png";
import memorickMobile from "./images/memorickMobile.jpg";

export default [
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
    title: "Memorick Game",
    view: memorick,
    mobileView: memorickMobile,
    description:
      "This project is a memory card game to test your memory, you just need to start selecting your cards and remember not to click twice on the same card.",
    language: [react, javascript, css],
    repo: "https://github.com/roobbs/memory-card-app",
    website: "https://memory-card-roobbs.netlify.app",
  },
  {
    id: 3,
    title: "Etch a Sketch",
    view: etch,
    mobileView: etchMobile,
    description:
      "This project is a browser version of a sketchpad, just a pretty neat toy for you to enjoy",
    language: [javascript, css],
    repo: "https://github.com/roobbs/etch-a-sketch",
    website: "https://roobbs.github.io/etch-a-sketch/",
  },
];
