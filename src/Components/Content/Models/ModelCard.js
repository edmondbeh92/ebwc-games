import React from "react";
import { Link } from "react-router-dom";

const ModelCard = ({ model, handleChange }) => {
  const { title, thumbnail_url } = model;

  return (
    <Link
      to={`/3d_models/${title}`}
      className="model-card"
      onClick={() => handleChange(model)}
    >
      <img src={thumbnail_url} alt={title} />
      <p className="bebas-font">{title}</p>
    </Link>
  );
};

export default ModelCard;
