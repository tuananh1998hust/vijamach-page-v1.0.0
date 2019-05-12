import React from "react";
import { Container, Row, Col } from "reactstrap";

// Components
import FormSupport from "../components/FormSupport";
// Images
import about from "../imgs/about.png";

const About = () => (
  <Container>
    <Row className="mb-5">
      <Col className="mb-2" sm="12" md="6">
        <img alt="about" className="img-fluid mb-2" src={about} />
      </Col>
      <Col className="mb-2" sm="12" md="6">
        <h3 className="mb-2">About</h3>
        <p className="text-secondary mb-2">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis
          eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
        </p>
        <p className="text-secondary mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          egestas ante, sed viverra nunc tincidunt nec nteger nonsed condimntum
          elit, sit amet feugiat lorem. Proin tempus sagittis velit vitae
          scelerisque.
        </p>
        <p className="text-secondary mb-2">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis
          eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
        </p>
        <p className="text-secondary mb-2">
          Business-to-business metrics analytics value proposition funding angel
          investor entrepreneur alpha ramen equity gamification. Social proof
          partner network research.
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col className="mb-2" sm="12" md="4">
        <h3 className="mb-2">Our History</h3>
        <p className="text-secondary mb-2">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis
          eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
        </p>
      </Col>

      <Col className="mb-2" sm="12" md="4">
        <h3 className="mb-2">Our Mission</h3>
        <p className="text-secondary mb-2">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis
          eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
        </p>
      </Col>

      <Col className="mb-2" sm="12" md="4">
        <h3 className="mb-2">Who We Are</h3>
        <p className="text-secondary mb-2">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis
          eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
        </p>
      </Col>
    </Row>

    <h2 className="text-center mb-3">Support</h2>
    <Row className="mb-5">
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <FormSupport color="success" />
      </Col>
    </Row>

    <Row>
      <Col className="mb-2" sm="12" md="3">
        <h3 className="mb-3">Vijamach</h3>
        <p className="mb-2 text-secondary">
          Bring The Best Mechanic Solution, CNC & Robotics, Design Web App And
          Human Resouce Development
        </p>
        <p className="mb-2 text-secondary">Connect Viet Nam & Japanse</p>
      </Col>
      <Col className="mb-2" sm="12" md="3">
        <h3 className="mb-3">Support Help</h3>
        <div className="d-flex align-items-center">
          <i className="fas fa-check" />
          <p className="mb-0 ml-2 text-secondary">About Us</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="fas fa-check" />
          <p className="mb-0 ml-2 text-secondary">Blog</p>
        </div>
      </Col>
      <Col className="mb-2" sm="12" md="3">
        <h3 className="mb-3">Cities Covered</h3>
        <div className="d-flex align-items-center">
          <i className="fas fa-check" />
          <p className="mb-0 ml-2 text-secondary">Hanoi</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="fas fa-check" />
          <p className="mb-0 ml-2 text-secondary">HoChiMinh</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="fas fa-check" />
          <p className="mb-0 ml-2 text-secondary">Tokyo</p>
        </div>
      </Col>
      <Col className="mb-2" sm="12" md="3">
        <h3 className="mb-3">Address</h3>
        <p className="mb-3 text-secondary">Hanoi VietNam</p>
        <h5 className="mb-3">PHONE: 02345678</h5>
      </Col>
    </Row>
  </Container>
);

export default About;
