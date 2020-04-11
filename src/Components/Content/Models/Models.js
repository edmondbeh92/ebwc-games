import React, { useState, useEffect } from "react";
import ModelList from "./ModelList";
import ModelMain from "./ModelMain";
import ModelContent from "./ModelContent";
import models_api from "../../../data/models_api";
import "../../../style/model.scss";

const Models = () => {
  const [modelList, setModelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const MODEL_ROOT_API =
    "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";

  const fetchModel = async () => {
    const data = await Promise.all(
      models_api.map((api) =>
        fetch(MODEL_ROOT_API + api).then((response) => response.json())
      )
    );
    setModelList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchModel();
  }, []);

  const renderContent = false ? <ModelContent /> : <ModelMain />;

  return (
    <section>
      <ModelList data={modelList} loading={isLoading} />
      <div className="model-content">{renderContent}</div>
    </section>
  );
};

export default Models;
