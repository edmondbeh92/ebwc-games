import React, { useState, useEffect } from "react";
import { ModelList } from "./ModelList";
import { ModelContent } from "./ModelContent";
import models_api from "../../../data/models_api";
import "../../../style/iframe.scss";

export const Models = () => {
  const [modelList, setModelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chosen, setChosen] = useState(null);

  const MODEL_ROOT_API =
    "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";

  useEffect(() => {
    fetchModel();
  }, []);

  const fetchModel = async () => {
    const data = await Promise.all(
      models_api
        .reverse()
        .map((api) =>
          fetch(MODEL_ROOT_API + api).then((response) => response.json())
        )
    );
    setModelList(data);
    setIsLoading(false);
  };

  return (
    <div>
      <ModelList data={modelList} loading={isLoading} />
      <ModelContent data={chosen} />
    </div>
  );
};
