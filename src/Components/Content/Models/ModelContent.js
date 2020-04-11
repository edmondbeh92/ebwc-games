import React from "react";
import renderHTML from "react-render-html";
import { useParams } from "react-router-dom";
import "../../../style/iframe.scss";

const ModelContent = () => {
  const { name } = useParams();
  // const currentModel = data.find((el) => el.title === name);

  const main = (
    <div className="text-center">
      <h1>WELCOME TO THE MODEL PAGE!</h1>
      <p>You can see great models here.</p>
    </div>
  );

  const modelViewer = true ? (
    <div className="d-flex justify-content-center">
      <div className="lds-dual-ring mx-auto"></div>
    </div>
  ) : (
    <div></div>
    // <div className="text-center my-4">{renderHTML(data.html)}</div>
  );

  const model = (
    <>
      <h1 className="text-center mb-5">{name}</h1>
      {modelViewer}
    </>
  );

  return name ? model : main;
};

export default ModelContent;
