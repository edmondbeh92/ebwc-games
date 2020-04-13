import React from "react";
import { useParams } from "react-router-dom";

const selector = /http.*embed/g;

const ModelContent = ({ data }) => {
  const { name } = useParams();

  const model = data.find((el) => el.title === name);
  const model_url = model ? model.html.match(selector)[0] : "";

  return model ? (
    <iframe title={model.title} src={model_url} frameBorder="0"></iframe>
  ) : (
    <div className="text-center">
      <h1>WELCOME TO THE MODEL PAGE!</h1>
      <p>You can see great models here.</p>
    </div>
  );
};

export default ModelContent;
