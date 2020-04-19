import React from "react";

const selector = /http.*embed/g;

const ModelContent = ({ model: { title, thumbnail_url, html } }) => (
  <>
    <img src={thumbnail_url} alt="" className="model-background" />
    <iframe
      title={title}
      src={html.match(selector)[0]}
      frameBorder="0"
    ></iframe>
  </>
);

export default ModelContent;
