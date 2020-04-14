import React from "react";
import footerLinks from "../../data/footer_links";
import FooterLinks from "./FooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/shared/footer.scss";

const Footer = () => {
  const links = footerLinks.map((footerLink) => (
    <FooterLinks key={footerLink.id} props={footerLink} />
  ));

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links-wrapper">{links}</div>

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
