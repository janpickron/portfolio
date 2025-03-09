import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <div className={"section-dark"} id="skill">
      <div className={"section-content"}>
        <h1>Skills</h1>
        <Container fluid>
          <Row>
            <Col className="fw-bold">Languages & Platforms</Col>
          </Row>
          <Row>
            <Col>
              {" "}
              React, JavaScript, Node.js, Express, Bootstrap, CSS3, HTML,
              TypeScript, PHP
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col className="fw-bold">Database </Col>
          </Row>
          <Row>
            <Col> MongoDB</Col>
          </Row>
          <br /> <br />
          <Row>
            <Col className="fw-bold">Others </Col>
          </Row>
          <Row>
            <Col>
              Jest, Postman, Firebase, Cloud Run, CI/CD, Web Accessibility,
              PhotoShop, Software Testing, GitHub, WordPress, Drupal, Canva
            </Col>
          </Row>
        </Container>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </div>
  );
};

export default Skills;
