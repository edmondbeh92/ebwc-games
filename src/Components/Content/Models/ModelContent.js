import React from "react";

const selector = /http.*embed/g;

const ModelContent = ({ model }) => {
  const model_url = model ? model.html.match(selector)[0] : "";

  return model ? (
    <>
      <img src={model.thumbnail_url} alt="" className="model-background" />
      <iframe title={model.title} src={model_url} frameBorder="0"></iframe>
    </>
  ) : (
    <div className="text-center">
      <h1>WELCOME TO THE MODEL PAGE!</h1>
      <p>You can see great models here.</p>
    </div>
  );
};

export default ModelContent;
