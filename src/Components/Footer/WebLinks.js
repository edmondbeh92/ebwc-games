import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "react-tooltip-lite";
import "../../style/shared/tooltip.scss";

const WebLinks = ({ props: { url, icon, tooltip, image_url } }) => {
  const renderIcon = icon ? (
    <FontAwesomeIcon icon={icon} className="icon" />
  ) : (
    <img src={image_url} alt="sketchfab_icon" />
  );

  return (
    <Tooltip content={tooltip}>
      <a target="_blank" rel="noopener noreferrer" data-tip="what" href={url}>
        {renderIcon}
      </a>
    </Tooltip>
  );
};

export default WebLinks;
