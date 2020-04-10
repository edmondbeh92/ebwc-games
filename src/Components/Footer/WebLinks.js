import React from "react";
import Tooltip from "react-tooltip-lite";
import "../../style/other.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WebLinks = (props) => (
  <Tooltip content={props.props.tooltip} className="text-light">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.props.url}
      data-tip="what"
    >
      <FontAwesomeIcon
        icon={props.props.icon}
        className="text-gray m-3"
        style={{ fontSize: "50px" }}
      />
    </a>
  </Tooltip>
);
