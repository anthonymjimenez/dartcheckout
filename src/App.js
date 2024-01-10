import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Badge,
  Accordion,
} from "react-bootstrap";
import outShotsData from "./OutShots";
import bannerData from "./BannerData";

const App = () => {
  const initialNumber = 170; // Starting number
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [outShots, setOutShots] = useState(outShotsData[initialNumber] || []);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [customRangeStart, setCustomRangeStart] = useState("");
  const [customRangeEnd, setCustomRangeEnd] = useState("");
  const [randomType, setRandomType] = useState(""); // Default to custom

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

  const handleSelectedRangesChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setSelectedRanges((prevRanges) =>
        prevRanges.includes(value)
          ? prevRanges.filter((range) => range !== value)
          : [value]
      );
    } else {
      setSelectedRanges((prevRanges) =>
        prevRanges.includes(value)
          ? prevRanges.filter((range) => range !== value)
          : [...prevRanges, value]
      );
    }
  };

  const handleCustomRangeStartChange = (e) => {
    setCustomRangeStart(e.target.value);
  };

  const handleCustomRangeEndChange = (e) => {
    setCustomRangeEnd(e.target.value);
  };

  const handleRandomOutShot = () => {
    let selectedRangesCopy = [...selectedRanges];

    if (selectedRangesCopy.includes("custom")) {
      // Validate custom range input
      const start = parseInt(customRangeStart);
      const end = parseInt(customRangeEnd);
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        // Replace "custom" with the actual range
        const customRange = `${start}-${end}`;
        selectedRangesCopy = selectedRangesCopy.map((range) =>
          range === "custom" ? customRange : range
        );
      } else {
        // Handle an error or provide feedback to the user
        alert("Invalid custom range. Please enter valid start and end values.");
        return;
      }
    }

    // Randomly select a range from the valid options
    const randomRange =
      selectedRangesCopy[Math.floor(Math.random() * selectedRangesCopy.length)];

    // Extract start and end values from the random range
    const [start, end] = randomRange.split("-");

    // Generate a random number within the selected range
    const randomNumber = Math.floor(
      parseInt(start) + Math.random() * (parseInt(end) - parseInt(start) + 1)
    );

    // Update the current number and fetch the corresponding out shots
    setCurrentNumber(randomNumber);
    setOutShots(outShotsData[randomNumber] || []);
  };

  const handleRandomTypeChange = (type) => {
    // Check if the current type is "custom"
    const isCustomType = randomType === "custom";

    // Toggle visibility of "Select Random Out Shot" area if the type is "custom"
    if (isCustomType) {
      setRandomType(""); // Reset the randomType to trigger visibility toggle
    } else {
      setRandomType(type);
    }

    // Retain custom range values when switching back to "Custom Random Shot"
    if (type !== "custom" && isCustomType) {
      if (
        !isNaN(parseInt(customRangeStart)) &&
        !isNaN(parseInt(customRangeEnd)) &&
        parseInt(customRangeStart) <= parseInt(customRangeEnd)
      ) {
        const customRange = `${customRangeStart}-${customRangeEnd}`;
        setSelectedRanges(["custom"]);
        setOutShots(outShotsData[currentNumber] || []); // Regenerate out shots based on the current number
      }
    }

    // Reset custom range values when switching to other random types
    if (type !== "custom") {
      setCustomRangeStart("");
      setCustomRangeEnd("");
    }

    if (type === "twoDart") {
      // Generate random number for two-dart range (41-100)
      const randomNumber = Math.floor(41 + Math.random() * (100 - 41 + 1));
      setCurrentNumber(randomNumber);
      setOutShots(outShotsData[randomNumber] || []);
    } else if (type === "threeDart") {
      // Generate random number for three-dart range (101-170)
      const randomNumber = Math.floor(101 + Math.random() * (170 - 101 + 1));
      setCurrentNumber(randomNumber);
      setOutShots(outShotsData[randomNumber] || []);
    } else if (type === "custom") {
      // Regenerate out shots based on the current number
      setOutShots(outShotsData[currentNumber] || []);
    }
  };

  return (
    <Container fluid className="text-center mt-3">
      <Row>
        <Col md={6} className="mx-auto">
          <Form.Group controlId="formNumber">
            <Form.Label className="mb-0">Enter Number:</Form.Label>
            <div className="input-group">
              <Form.Control
                type="number"
                value={currentNumber}
                onChange={handleNumberChange}
                placeholder="Enter a number"
                className="form-control-lg"
                style={{ fontSize: "2em" }}
              />
              <Button
                variant="primary"
                size="lg"
                className="input-group-append"
                onClick={handleIncrement}
              >
                +
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="input-group-append"
                onClick={handleDecrement}
              >
                -
              </Button>
            </div>
          </Form.Group>
          <div className="mt-3">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="font-weight-bold">
                  {bannerData.map((item) =>
                    currentNumber >= parseInt(item.range.split("-")[0]) &&
                    currentNumber <= parseInt(item.range.split("-")[1]) ? (
                      <span
                        key={item.range}
                      >{`Info about ${item.range} Range:`}</span>
                    ) : null
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {bannerData.map((data, index) => (
                    <div
                      key={index}
                      className={`
                        ${
                          currentNumber >= parseInt(data.range.split("-")[0]) &&
                          currentNumber <= parseInt(data.range.split("-")[1])
                            ? "mb-2"
                            : "d-none"
                        }
                      `}
                    >
                      {data.info}
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h5 className="mt-4 mb-3">Possible Out Shots:</h5>
            <div className="card p-3 shadow">
              <ul className="list-unstyled">
                {outShots.map((shot, index) => (
                  <li key={index} className="mb-2">
                    {shot.value && (
                      <div className="row">
                        <div className="col">
                          <strong>{shot.value}:</strong>{" "}
                          {shot.note && (
                            <small className="text-muted">({shot.note})</small>
                          )}
                        </div>
                        <div className="col-auto">
                          <div className="badge-container">
                            {shot.label === "Practical" && (
                              <Badge
                                variant="light"
                                className="bg-primary text-dark"
                              >
                                {shot.label}
                              </Badge>
                            )}
                            {shot.label === "Professional" && (
                              <Badge
                                variant="light"
                                className="bg-success text-dark"
                              >
                                {shot.label}
                              </Badge>
                            )}
                            {shot.label === "Alternative" && (
                              <Badge
                                variant="light"
                                className="bg-secondary text-dark"
                              >
                                {shot.label}
                              </Badge>
                            )}
                            {shot.label === "Two Dart Safety" && (
                              <Badge
                                variant="light"
                                className="bg-info text-dark"
                              >
                                {shot.label}
                              </Badge>
                            )}
                            {shot.label === "Avoid" && (
                              <Badge
                                variant="light"
                                className="bg-danger text-dark"
                              >
                                {shot.label}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {randomType === "custom" && (
            <Form.Group controlId="formRandomOutShot">
              <Form.Label className="mb-0">Select Random Out Shot:</Form.Label>
              <div className="input-group">
                {bannerData.map((item) => (
                  <Form.Check
                    key={item.range}
                    type="checkbox"
                    id={`checkbox-${item.range}`}
                    label={item.range}
                    value={item.range}
                    checked={selectedRanges.includes(item.range)}
                    onChange={handleSelectedRangesChange}
                    inline
                    className="mx-2"
                  />
                ))}
                <Form.Check
                  type="checkbox"
                  id="checkbox-custom"
                  label="Custom"
                  value="custom"
                  checked={selectedRanges.includes("custom")}
                  onChange={handleSelectedRangesChange}
                  inline
                  className="mx-2"
                />
                {selectedRanges.includes("custom") ? (
                  <div className="d-flex">
                    <Form.Control
                      type="number"
                      value={customRangeStart}
                      onChange={handleCustomRangeStartChange}
                      placeholder="Start"
                      className="form-control-lg"
                    />
                    <span className="mx-2">to</span>
                    <Form.Control
                      type="number"
                      value={customRangeEnd}
                      onChange={handleCustomRangeEndChange}
                      placeholder="End"
                      className="form-control-lg"
                    />
                    <Button
                      variant="primary"
                      size="lg"
                      className="input-group-append"
                      onClick={handleRandomOutShot}
                    >
                      Get Random Out Shot
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    className="input-group-append"
                    onClick={handleRandomOutShot}
                  >
                    Get Random Out Shot
                  </Button>
                )}
              </div>
            </Form.Group>
          )}

          <div className="mt-3">
            <Button
              variant="primary"
              size="lg"
              className="mx-2 mt-2"
              onClick={() => handleRandomTypeChange("twoDart")}
            >
              Two Dart Random Shot
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="mx-2 mt-2"
              onClick={() => handleRandomTypeChange("threeDart")}
            >
              Three Dart Random Shot
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="mx-2 mt-2"
              onClick={() => handleRandomTypeChange("custom")}
            >
              Custom Random Shot
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
