import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import outShotsData from "./Data/OutShots";
import bannerData from "./Data/BannerData";
import NumberRangeInfo from "./Components/NumberRangeInfo";
import OutShotList from "./Components/OutShotList";
import RandomMode from "./Components/RandomMode";
import NumberInput from "./Components/NumberInput";

const App = () => {
  const initialNumber = 170; // Starting number
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [outShots, setOutShots] = useState(outShotsData[initialNumber] || []);

  const handleNumberChange = (e) => {
    const newNumber = parseInt(e.target.value, 10);
    const updatedNumber = isNaN(newNumber) ? 0 : newNumber;

    setCurrentNumber(updatedNumber);
    setOutShots(outShotsData[updatedNumber] || []);
  };

  return (
    <Container fluid className="text-center mt-3">
      {/* Header */}
      <Row>
        <Col md={12} className="mx-auto">
          <h1 className="mb-4">Dart Counter</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mx-auto">
          <NumberInput
            currentNumber={currentNumber}
            handleNumberChange={handleNumberChange}
            setCurrentNumber={setCurrentNumber}
            setOutShots={setOutShots}
            outShotsData={outShotsData}
          ></NumberInput>
          <div className="mt-3">
            <NumberRangeInfo
              bannerData={bannerData}
              currentNumber={currentNumber}
            ></NumberRangeInfo>
            <OutShotList outShots={outShots}></OutShotList>
          </div>
          <RandomMode
            bannerData={bannerData}
            setCurrentNumber={setCurrentNumber}
            currentNumber={currentNumber}
            setOutShots={setOutShots}
            outShotsData={outShotsData}
          ></RandomMode>
        </Col>
      </Row>
      {/* Footer */}
      <Row className="mt-5">
        <footer>
          <p>
            Created by{" "}
            <a
              href="https://github.com/anthonymjimenez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anthony Jimenez
            </a>
          </p>
        </footer>
      </Row>
    </Container>
  );
};

export default App;
