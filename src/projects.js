import javascript from "./assets/js.png";
import css from "./assets/css.png";
import react from "./assets/react.svg";
import firebase from "./assets/firebase.png";
import typescript from "./assets/typescript.png";
//frontend
import weather from "./images/weather.png";
import weatherMobile from "./images/weatherMobile.jpg";
import athlead from "./images/athlead.png";
import athleadMobile from "./images/athleadMobile.jpg";
// import memorick from "./images/memorick.png";
// import memorickMobile from "./images/memorickMobile.jpg";
//mobile
import snap1 from "./images/snap1.jpg";
import snap2 from "./images/snap2.jpg";
import snap3 from "./images/snap3.jpg";
import snap4 from "./images/snap4.jpg";
//backend

export default {
  web: [
    {
      id: 1,
      title: "Athlead",
      view: athlead,
      mobileView: athleadMobile,
      description:
        "Minimalist e-commerce platform with a clean UI. \n - Browse items by category \n - Add items to your cart or favorites \n - Navigate through various pages",
      language: [react, javascript, css],
      repo: "https://github.com/roobbs/shopping-cart",
      website: "https://athlead.vercel.app/",
    },
    {
      id: 2,
      title: "React Weather",
      view: weather,
      mobileView: weatherMobile,
      description:
        "The app allows users to: \n - Search for any city \n - Select a city from search results \n - Automatically detect current location to display local weather \n -If location permission is not granted, app remebers your last search",
      language: [react, javascript, css],
      repo: "https://github.com/roobbs/react-weather",
      website: "https://reactweather-roobbs.netlify.app/",
    },
    // {
    //   id: 3,
    //   title: "Memorick Game",
    //   view: memorick,
    //   mobileView: memorickMobile,
    //   description:
    //     "This project is a memory card game to test your memory, you just need to start selecting your cards and remember not to click twice on the same card.",
    //   language: [react, javascript, css],
    //   repo: "https://github.com/roobbs/memory-card-app",
    //   website: "https://memory-card-roobbs.netlify.app",
    // },
  ],
  mobile: [
    {
      id: 1,
      title: "SnapPay Bank - CRUD Mobile Application",
      view: [snap1, snap2, snap3, snap4],
      description:
        "Built with React Native and powered by Firebase, offers a user-friendly experience for managing your finances. Designed with an attractive and intuitive UI.",
      language: [react, firebase, typescript],
      repo: "https://github.com/roobbs/snap-pay-bank",
    },
  ],
};
