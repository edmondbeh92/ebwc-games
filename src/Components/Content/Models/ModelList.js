import React from "react";
import ModelCard from "./ModelCard";
import "../../../style/shared/loader_ring.scss";

const ModelList = ({ models, loading }) => {
  const modelTags = models.map((model) => (
    <ModelCard key={model.title} model={model} />
  ));

  const renderContent = loading ? (
    <div className="lds-dual-ring mx-auto"></div>
  ) : (
    modelTags
  );

  return <div className="models-scrollbar">{renderContent}</div>;
};

export default ModelList;
