import React from "react";
import "../../style/homepage.scss";

const Home = () => (
  <section className="home container text-center">
    <img
      src={require("../../images/ebwc_weblogo.png")}
      alt="EBWC_Image"
      className="ebwc-img"
    />

    <p className="text-justify">
      Hello there! EBWC Games is maintained by me, a one man hobbyist game
      developer. I like arcade style shooter such as shmups and top-down
      shooters. I also like games that focus on exploration and satisfying
      rewards, including Metroidvania.
      <br /> <br />I had tried making a 2D vertical shmup called
      <strong> Celestial Raid</strong>. Feel free to play it and feedback are
      very welcomed! I am also currently taking my time to make a 3D top-down
      shooter and learning 3D modelling at the same time, thus you can see some
      of my test models.
      <br /> <br />
      Thank you for visiting here!
    </p>
  </section>
);

export default Home;
