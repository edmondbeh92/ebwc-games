import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../style/image.scss";

export const ModelCard = (props) => {
  const [hover, setHover] = useState(false);
  const cardHover = `card text-link ${hover ? "card-hover" : ""}`;
  const cardText = `card-size ${hover ? "card-text" : ""}`;

  return (
    <Link
      to={`/3d_models/${props.data.title}`}
      className={cardHover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={props.data.thumbnail_url}
        alt="model-image"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          width: "100%",
        }}
      />
      <h5 className={cardText}>
        <b className={cardText}>{props.data.title}</b>
      </h5>
    </Link>
  );
};
