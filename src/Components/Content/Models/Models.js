import React, { useState, useEffect } from "react";
import { ModelList } from "./ModelList";
import { ModelContent } from "./ModelContent";
import { model_list } from "../../../data/model_list";
import "../../../style/iframe.scss";

export const Models = () => {
  const [modelList, setModelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chosen, setChosen] = useState(null);

  const MODEL_API =
    "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";

  useEffect(() => {
    fetchModel();
  }, []);

  const fetchModel = async () => {
    const data = await Promise.all(
      model_list.map((model) =>
        fetch(MODEL_API + model.api).then((response) => response.json())
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
