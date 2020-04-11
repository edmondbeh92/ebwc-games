import React from "react";
import { ModelCard } from "./ModelCard";
import "../../../style/shared/loader_ring.scss";

export const ModelList = ({ data, loading }) => {
  const modelTags = data.map((model) => (
    <ModelCard key={model.title} data={model} />
  ));

  if (loading) {
    return (
      <div className="list">
        <div className="lds-dual-ring mx-auto"></div>
      </div>
    );
  } else {
    return <div className="list">{modelTags}</div>;
  }
};
