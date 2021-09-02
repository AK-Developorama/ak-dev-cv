import React from "react";
import { Typography } from "@material-ui/core";
import cvData from "../../utils/cvData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{cvData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          ©2021 Designed & Developed by <a href="https://cdpn.io/developorama/debug/f680ddde22aa41b05669b4539970b013">
            Aliz Kopenetz
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
