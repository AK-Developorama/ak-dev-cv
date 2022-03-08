import React from "react";
import { Typography } from "@material-ui/core";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_right">
        <Typography className="footer_copyright">
          ©2021 Designed & Developed by{" "}
          <a
            className="footerTextName"
            href="https://github.com/AK-developorama"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aliz Kopenetz
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
