import React from "react";
import { Typography } from "@material-ui/core";
import cvData from "../../utils/cvData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_right">
        <Typography className="footer_copyright">
          ©2021 Designed & Developed by{" "}
          <a
            className="footerTextName"
            href="https://cdpn.io/developorama/debug/2aa033ef01d99cfb25899bf676524657"
            target="_blank"
            rel="noopener noreferrer"
          >
            AK Developorama
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
