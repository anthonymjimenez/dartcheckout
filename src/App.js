import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Badge } from "react-bootstrap";
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
    <Container fluid className="text-center mt-3">
      <Row>
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
          <div className="mb-3">
            <Button
              variant="primary"
              className="mr-2"
              size="lg"
              onClick={handleDecrement}
            >
              -
            </Button>
            <Button variant="primary" size="lg" onClick={handleIncrement}>
              +
            </Button>
          </div>
          <div className="mt-3">
            <h5>Possible Out Shots:</h5>
            <ul className="list-unstyled">
              {outShots.map((shot, index) => (
                <li key={index} className="mb-2">
                  {shot.value && (
                    <div>
                      <strong>{shot.value}:</strong>{" "}
                      {shot.note && (
                        <small className="text-muted ml-2">
                          ({shot.note}){" "}
                        </small>
                      )}
                      {shot.label === "Practical" && (
                        <Badge variant="success">{shot.label}</Badge>
                      )}
                      {shot.label === "Professional" && (
                        <Badge variant="primary">{shot.label}</Badge>
                      )}
                      {shot.label === "Alternative" && (
                        <Badge variant="danger">{shot.label}</Badge>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
