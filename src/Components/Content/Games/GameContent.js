import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../style/shared/iframe.scss";

const GameContent = ({ game }) => {
  const [image, setImage] = useState(null);

  const {
    name,
    engine,
    description,
    game_url,
    youtube_url,
    banner,
    images,
  } = game;

  return (
    <>
      <div className="game-header">
        <img src={banner} alt={`${name}-banner`} />
        <div className="banner-overlay"></div>

        <div className="header-content">
          <h1 className="text-center">{name}</h1>
          <p className="text-warning text-center">Made with {engine}</p>
        </div>
      </div>

      <div className="container game-content">
        <h4 className="text-gray pt-5 pb-4">{description}</h4>

        <a
          href={game_url}
          target="_blank"
          rel="noopener noreferrer"
          className="button bebas-font"
        >
          Download
        </a>

        <div className="iframe-wrapper mb-5">
          <div>
            <iframe
              title="CR_video"
              src={youtube_url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

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
