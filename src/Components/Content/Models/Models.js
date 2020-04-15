import React, { useState, useEffect } from "react";
import ModelList from "./ModelList";
import ModelContent from "./ModelContent";
import models_api from "../../../data/models_api";
import { useParams } from "react-router-dom";
import "../../../style/model.scss";

const Models = () => {
  const [modelList, setModelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();
  const model = modelList.find((model) => model.title === name);

  const MODEL_ROOT_API =
    "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";

  const fetchModels = async () => {
    const data = await Promise.all(
      models_api.map((api) =>
        fetch(MODEL_ROOT_API + api).then((response) => response.json())
      )
    );
    setModelList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <section>
      <ModelList models={modelList} loading={isLoading} />
      <ModelContent model={model} />
    </section>
  );
};

export default Models;
