import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModelList from "./ModelList";
import ModelContent from "./ModelContent";
import models_api from "../../../data/models_api";
import "../../../style/model.scss";

const Models = () => {
  const { name } = useParams();

  const [models, setModels] = useState([]);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const MODEL_ROOT_API =
    "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";

  const fetchModels = async () => {
    const data = await Promise.all(
      models_api.map((api) =>
        fetch(MODEL_ROOT_API + api).then((response) => response.json())
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

      {name && model ? (
        <ModelContent model={model} />
      ) : (
        <div className="model-home text-center">
          <h1>WELCOME TO THE MODEL PAGE!</h1>
          <p>You can see great models here.</p>
        </div>
      )}
    </section>
  );
};

export default Models;
