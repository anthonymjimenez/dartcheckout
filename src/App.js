import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import outShotsData from "./OutShots";

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

  const handleIncrement = () => {
    const newNumber = currentNumber + 1;
    setCurrentNumber(newNumber);
    setOutShots(outShotsData[newNumber] || []);
  };

  const handleDecrement = () => {
    const newNumber = currentNumber - 1;
    setCurrentNumber(newNumber);
    setOutShots(outShotsData[newNumber] || []);
  };

  return (
    <Container fluid>
      <Row className="mt-3">
        <Col md={6} className="mx-auto">
          <Form.Group controlId="formNumber">
            <Form.Label>Enter Number:</Form.Label>
            <Form.Control
              type="number"
              value={currentNumber}
              onChange={handleNumberChange}
              placeholder="Enter a number"
            />
          </Form.Group>
          <Button variant="primary" className="mr-2" onClick={handleDecrement}>
            -
          </Button>
          <Button variant="primary" onClick={handleIncrement}>
            +
          </Button>
          <div className="mt-3">
            <h5>Possible Out Shots:</h5>
            <ul>
              {outShots.map(
                (
                  shot,
                  index // this is mapping the labels
                ) => (
                  <li key={index}>
                    <strong>{shot.label}:</strong> {shot.value}
                    {shot.note && (
                      <small className="text-muted ml-2">({shot.note})</small>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
