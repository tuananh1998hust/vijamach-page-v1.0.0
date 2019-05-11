import React from "react";
import { Container, Row, Col } from "reactstrap";

// Images
import mechanic from "../imgs/mechanic.png";
import automatic from "../imgs/automatic.png";
import webapp from "../imgs/webapp.png";
import resource from "../imgs/resource.png";
import teamwork from "../imgs/teamwork.png";
import solution from "../imgs/solution.png";
import support from "../imgs/support.png";

const HomePage = () => (
  <div>
    <div id="banner" />
    <Container>
      <h2 className="text-center mb-5">OUR SERVICES</h2>
      <Row className="services mb-5">
        <Col className="mb-3" sm="12" md="3">
          <div className="service d-flex flex-column align-items-center justify-content-center p-3">
            <img alt="service" className="mb-2" src={mechanic} />
            MECHANIC SOLUTIONS
          </div>
        </Col>
        <Col className="mb-3" sm="12" md="3">
          <div className="service d-flex flex-column align-items-center justify-content-center p-3">
            <img alt="service" className="mb-2" src={automatic} />
            CNC & Robotics
          </div>
        </Col>
        <Col className="mb-3" sm="12" md="3">
          <div className="service d-flex flex-column align-items-center justify-content-center p-3">
            <img alt="service" className="mb-2" src={webapp} />
            WEB & APP DESIGN
          </div>
        </Col>
        <Col className="mb-3" sm="12" md="3">
          <div className="service d-flex flex-column align-items-center justify-content-center p-3">
            <img alt="service" className="mb-2" src={resource} />
            HUMAN RESOURCE
          </div>
        </Col>
      </Row>

      <h2 className="text-center mb-5">WHY YOU CHOOSE VIJAMACH</h2>
      <Row className="services mb-5">
        <Col className="mb-3" sm="12" md="4">
          <div className="service d-flex flex-column align-items-center justify-content-center p-3">
            <img alt="service" className="mb-2" src={teamwork} />
            Teamate Is High Quality & Creative
          </div>
        </Col>
        <Col className="mb-3" sm="12" md="4">
          <div className="service d-flex flex-column align-items-center justify-content-center p-3">
            <img alt="service" className="mb-2" src={solution} />
            Optimal Solution
          </div>
        </Col>
        <Col className="mb-3" sm="12" md="4">
          <div className="service d-flex flex-column align-items-center justify-content-center p-3">
            <img alt="service" className="mb-2" src={support} />
            The Best Supported
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HomePage;
