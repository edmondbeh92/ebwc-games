import React from "react";
import ModelCard from "./ModelCard";
import "../../../style/shared/loader_ring.scss";

const ModelList = ({ data, loading }) => {
  const modelTags = data.map((model) => (
    <ModelCard key={model.title} data={model} />
  ));

  const renderContent = loading ? (
    <div className="lds-dual-ring mx-auto"></div>
  ) : (
    modelTags
  );

  return <div className="models-scrollbar">{renderContent}</div>;
};

export default ModelList;
