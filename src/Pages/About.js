import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      {/* Header */}
      <Row className="mt-4">
        <Col md={12} className="mx-auto">
          <h1 className="mb-4">About Dart Counter</h1>
        </Col>
      </Row>
      {/* About Content */}
      <Row>
        <Col md={8} className="mx-auto">
          <p className="lead">
            This website was created specifically to allow dart players to use a
            system that emphasizes a practical approach. Most out shot
            calculators rely on a system that favors optimizing favorable
            doubles without taking into consideration human error. You can learn
            more about Dart Counter's approach to 501{" "}
            <a
              href="https://ricksmith.ca/Darts/dartsouts.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . This website uses Rick's system and notes.
          </p>
          <p>
            Thanks for using Dart Counter and please check out my other projects{" "}
            <a
              href="https://github.com/anthonymjimenez"
              target="_blank"
              rel="noopener noreferrer"
            >
              (github.com/anthonymjimenez)
            </a>
            .
          </p>
        </Col>
      </Row>
    </>
  );
};

export default About;
