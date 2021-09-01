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
import './Header.css';


const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="header">
      {/* HOME LINK */}
      <Nav.Link as={NavLink} to="/" className='header_navlink'>
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* CV Link */}

          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Curriculum Vitae
          </Nav.Link>

          {/* Portfolio Link */}

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Sample Works
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(cvData.socials).map((key) => (
            <a href={cvData.socials[key].link} target="_blank">
              {cvData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Email Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
