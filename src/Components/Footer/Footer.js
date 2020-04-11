import React from "react";
import WebLinks from "./WebLinks";
import webLinks from "../../data/web_links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/shared/footer.scss";

const Footer = () => {
  const links = webLinks.map((webLink) => (
    <WebLinks key={webLink.id} props={webLink} />
  ));

  return (
    <footer className="footer">
      <div className="container">
        <div className="web-links-wrapper">{links}</div>

        <p className="email">
          <span className="text-warning">EMAIL: </span>
          ebgames12418@gmail.com
        </p>
        <p className="text-warning copyright">
          <FontAwesomeIcon icon="copyright" /> 2020 EBWC GAMES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
