import React from "react";
import { Link } from "react-router-dom";

const ModelCard = ({ data: { title, thumbnail_url } }) => {
  return (
    <Link to={`/3d_models/${title}`} className="model-card">
      <img src={thumbnail_url} alt={title} />
      <p className="bebas-font">{title}</p>
    </Link>
  );
};

export default ModelCard;
