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
              React, JavaScript, Node.js, Bootstrap, CSS3, HTML, TypeScript, Web
              Accessibility, Software Testing
            </Col>
          </Row>
          <br />

          <Row>
            <Col className="fw-bold">Database </Col>
          </Row>
          <Row>
            <Col> MongoDB</Col>
          </Row>
          <br />
          <Row>
            <Col className="fw-bold">Other </Col>
          </Row>
          <Row>
            <Col>Jest, Firebase, Cloud Run, CI/CD, CMS </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
