import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModelList from "./ModelList";
import ModelContent from "./ModelContent";
import "../../../style/model.scss";

const MODELS_API = "https://api.sketchfab.com/v3/models?user=edmondbeh92";
const MODEL_ROOT_API =
  "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";

const Models = () => {
  const { name } = useParams();

  const [models, setModels] = useState([]);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchModels = async () => {
    const { results } = await fetch(MODELS_API).then((response) =>
      response.json()
    );

    results.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

    const data = await Promise.all(
      results.map((model) =>
        fetch(
          `${MODEL_ROOT_API}${model.name
            .toLowerCase()
            .replace(/[()]/g, "")
            .replace(/ /g, "-")}-${model.uid}`
        ).then((response) => response.json())
      )
    );

    setModels(data);
    setIsLoading(false);
    name && setModel(data.find((model) => model.title === name));
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleChange = (model) => setModel(model);

  return (
    <section>
      <ModelList
        models={models}
        loading={isLoading}
        handleChange={handleChange}
      />

      {model ? (
        <ModelContent model={model} />
      ) : (
        <div className="model-home text-center">
          <h1>WELCOME TO THE MODEL PAGE!</h1>
          <p>Select Model to View</p>
        </div>
      )}
    </section>
  );
};

export default Models;
