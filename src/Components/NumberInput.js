import { Button, Form } from "react-bootstrap";

const NumberInput = ({
  currentNumber,
  handleNumberChange,
  setCurrentNumber,
  setOutShots,
  outShotsData,
}) => {
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
  );
};

export default NumberInput;
