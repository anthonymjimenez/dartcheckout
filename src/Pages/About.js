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
            This site's virtual checkout table emphasizes a practical approach
            to doubling out in '01 format darts. Most out shot calculators rely
            on a system that is best suited for professional players who hit
            triples at rates exceeding 30 percent. The rest of us can benefit
            from a system that takes into account occasional stray darts. You
            can learn more about Dart Counter's approach to 501{" "}
            <a
              href="https://ricksmith.ca/Darts/dartsouts.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . This website uses Rick's system and notes.
            <br></br>
            <br></br>
            <strong> Final note: </strong> If you find yourself doubting if you
            should go for the suggested shot, please refer to the "Learn more
            about this range" dropdown banner for more information.
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
