import React from "react";
import ModelCard from "./ModelCard";
import "../../../style/shared/loader_ring.scss";

const ModelList = ({ loading, models }) => (
  <div className="models-scrollbar">
    {loading ? (
      <div className="lds-dual-ring mx-auto"></div>
    ) : (
      models.map((model) => <ModelCard key={model.title} model={model} />)
    )}
  </div>
);

export default ModelList;
