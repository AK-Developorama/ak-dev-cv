import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import { Link, NavLink, withRouter } from "react-router-dom";
import cvData from "../../utils/cvData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="header">
      
     
      <Navbar.Collapse>
        
        <div className="header_right">
          {Object.keys(cvData.socials).map((key) => (
            <a href={cvData.socials[key].link} target="_blank">
              {cvData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"PORTFOLIO"}/>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
