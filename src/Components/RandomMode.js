import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const RandomMode = ({
  bannerData,
  setCurrentNumber,
  currentNumber,
  setOutShots,
  outShotsData,
}) => {
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [customRangeStart, setCustomRangeStart] = useState("");
  const [customRangeEnd, setCustomRangeEnd] = useState("");
  const [randomType, setRandomType] = useState(""); // Default to custom

  const handleSelectedRangesChange = (e) => {
    const value = e.target.value;
    setSelectedRanges((prevRanges) =>
      prevRanges.includes(value)
        ? prevRanges.filter((range) => range !== value)
        : [...prevRanges, value]
    );
  };

  const handleCustomRangeStartChange = (e) => {
    setCustomRangeStart(e.target.value);
  };

  const handleCustomRangeEndChange = (e) => {
    setCustomRangeEnd(e.target.value);
  };

  const handleCustomOutShot = () => {
    let selectedRangesCopy = [...selectedRanges];

    if (selectedRangesCopy.includes("custom")) {
      // this "custom" refers to the option to input a range within the custom option
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

  const handleStandardOutShot = (type) => {
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
    }
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

    handleStandardOutShot(type);
  };

  return (
    <>
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
                  onClick={handleCustomOutShot}
                >
                  Get Random Out Shot
                </Button>
              </div>
            ) : (
              <Button
                variant="primary"
                size="lg"
                className="input-group-append"
                onClick={handleCustomOutShot}
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
    </>
  );
};

export default RandomMode;
