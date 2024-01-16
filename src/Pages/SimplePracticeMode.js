import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import outShotsData from "../Data/OutShots";
import bannerData from "../Data/BannerData";
import NumberRangeInfo from "../Components/NumberRangeInfo";
import OutShotList from "../Components/OutShotList";
import NumberInput from "../Components/NumberInput";

const SimplePracticeMode = () => {
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
    <>
      <Row className="mt-4">
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
        </Col>
      </Row>
    </>
  );
};

export default SimplePracticeMode;
