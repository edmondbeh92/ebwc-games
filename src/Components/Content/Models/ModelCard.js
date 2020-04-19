import React from "react";
import { Link } from "react-router-dom";

const ModelCard = ({ model: { title, thumbnail_url } }) => (
  <Link to={`/3d_models/${title}`} className="model-card">
    <img src={thumbnail_url} alt={title} />
    <p className="bebas-font">{title}</p>
  </Link>
);

export default ModelCard;
