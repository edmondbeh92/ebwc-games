import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameContent = ({ game }) => {
  const [image, setImage] = useState(null);

  const {
    name,
    engine,
    description,
    game_url,
    // youtube_url,
    // banner,
    images,
  } = game;

  return (
    <>
      {/* WIP START */}
      {/* <div className="iframe-wrapper hero">
        <div className="iframe-overlay"></div>
        <div className="iframe-content">
          <iframe
            title="CR_video"
            src={
              youtube_url +
              "?autoplay=1&controls=0&mute=1&showinfo=0&loop=1&rel=0"
            }
            frameborder="0"
            allow="autoplay"
            allowfullscreen
          ></iframe>
        </div>

        <div className="hero-section">
          <div className="header-content">
            <h1 className="text-center bebas-font">{name}</h1>
            <p className="text-warning text-center bebas-font">
              Made with {engine}
            </p>
          </div>
        </div>
      </div> */}
      {/* WIP ENDS */}

      <div className="game-header">
        {/* PLACEHOLDER */}
        <img
          src={
            "http://hdwpro.com/wp-content/uploads/2017/10/Free-Space-Background.png"
          }
          alt={`${name}-banner`}
        />
        <div className="banner-overlay"></div>

        <div className="header-content bebas-font">
          <h1 className="text-center">{name}</h1>
          <p className="text-warning text-center">Made with {engine}</p>
        </div>
      </div>

      <div className="container game-content">
        <p className="text-gray text-center" style={{ marginBottom: 100 }}>
          {description}
        </p>

        <a
          href={game_url}
          target="_blank"
          rel="noopener noreferrer"
          className="button bebas-font"
          style={{ marginBottom: 100 }}
        >
          Download
        </a>

        <div className="row game-image">
          {images.map((image) => (
            <div className="col-md-6 game-image-wrapper">
              <img src={image} alt={image} onClick={() => setImage(image)} />
            </div>
          ))}

          {image && (
            <div className="game-image-enlarged">
              <div>
                <div className="close-btn" onClick={() => setImage(null)}>
                  <FontAwesomeIcon icon="times" />
                </div>
                <img src={image} alt={image} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameContent;
