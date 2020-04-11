import React from "react";

export const GameContent = (props) => {
  const images = props.selectedGame.img_url.map((image) => (
    <img src={image} alt="x" className="game-images" />
  ));

  return (
    <div className="content">
      <h1 className="text-center">{props.selectedGame.name}</h1>
      <p className="text-warning text-center">
        Made with {props.selectedGame.engine}
      </p>
      <hr />
      <br />
      <img src={props.selectedGame.splash_url} alt="x" className="splash-img" />

      <h4 className="text-gray pt-5 pb-4">
        {props.selectedGame.description}
        <br />
        <br />
        <div className="text-center">
          <a
            href={props.selectedGame.game_link}
            target="_blank"
            alt="x"
            rel="noopener noreferrer"
            className="btn btn-secondary my-3"
          >
            <strong>Play</strong>
          </a>
        </div>
      </h4>

      <div className="container_iframe mb-5">
        <div className="iframe_wrapper">
          <iframe
            className="iframe_content"
            title="CR_video"
            src={props.selectedGame.youtube_link}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>
        <hr />
        <h3 className="text-gray py-2">Gallery</h3>
        <hr />
        {images}
      </div>
    </div>
  );
};
