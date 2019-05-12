import React from "react";
import { Row, Col, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

// Components
import FormSupport from "./FormSupport";

const Footer = () => (
  <div id="footer">
    <Row>
      <Col className="d-flex flex-column" sm="12" md="4">
        <Link className="footer-logo mb-2" to="/">
          Vijamach
        </Link>
        <div className="d-flex mb-2">
          <NavLink
            className="footer-icon"
            href="https://www.facebook.com/Vijamach/"
          >
            <i className="fab fa-facebook-f mr-1" />
          </NavLink>
          <NavLink className="footer-icon" href="#">
            <i className="fab fa-twitter mr-1" />
          </NavLink>
          <NavLink className="footer-icon" href="#">
            <i className="fab fa-instagram mr-1" />
          </NavLink>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-phone-square mr-2" />
          <p className="m-0">02345678</p>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="far fa-envelope-open mr-2" />
          <p className="m-0">Vijamach@info.com</p>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-map-marker-alt mr-2" />
          <p className="m-0">Hanoi Viet Nam</p>
        </div>
      </Col>
      <Col className="d-flex flex-column" sm="12" md="4">
        <Link className="footer-link mb-2" to="/">
          Home
        </Link>
        <Link className="footer-link mb-2" to="/about">
          About
        </Link>
        <Link className="footer-link mb-2" to="/products">
          Products
        </Link>
        <Link className="footer-link mb-2" to="/join-us">
          Join Us
        </Link>
      </Col>
      <Col sm="12" md="4">
        <FormSupport color="light" />
      </Col>
    </Row>
    <div className="footer-line" />
    <p className="text-center">&copy; Vijamach 2019</p>
  </div>
);

export default Footer;
