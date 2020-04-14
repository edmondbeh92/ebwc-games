import React from "react";
import "../../../style/iframe.scss";

const GameContent = ({ game }) => {
  const {
    name,
    engine,
    description,
    game_url,
    youtube_url,
    banner,
    images,
  } = game;

  const pictures = images.map((image) => (
    <img src={image} alt={image} className="game-image" />
  ));

  return (
    <div className="content">
      <h1 className="text-center">{name}</h1>
      <p className="text-warning text-center">Made with {engine}</p>
      <hr />
      <br />
      <img src={banner} alt="x" className="banner" />

      <h4 className="text-gray pt-5 pb-4">
        {description}
        <br />
        <br />
        <div className="text-center">
          <a
            href={game_url}
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
            src={youtube_url}
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
        {pictures}
      </div>
    </div>
  );
};

export default GameContent;
