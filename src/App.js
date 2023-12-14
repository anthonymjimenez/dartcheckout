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

const App = () => {
  const initialNumber = 170; // Starting number
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [outShots, setOutShots] = useState(outShotsData[initialNumber] || []);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [customRangeStart, setCustomRangeStart] = useState("");
  const [customRangeEnd, setCustomRangeEnd] = useState("");

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

  const bannerData = [
    { range: "2-32", info: "This is the best place to be." },
    {
      range: "33-60",
      info: "This is a good place to be. You only need 2 darts to finish and you don't need a triple or DB. If your opponent is also on a double or if you only have 2 darts in your hand, you should consider the 2 dart safety shots.",
    },
    {
      range: "61-70",
      info: "Learn this range!! With 3 darts, you can still finish without hitting a triple. Pay close attention when you only have 2 darts in your hand since you should ALWAYS shoot for the triple that will leave 50 if you only hit a single. Don't put all of your eggs in the triple basket. Instead, leave yourself a 'backup parachute' shot at the Double Bull with your last dart.",
    },
    {
      range: "71-80",
      info: "You're now into the tough finishes. If you find yourself here with only 2 darts, you MUST hit a triple to finish. If you're in this situation AND your opponent is also on a finish, it makes sense to go for an 'unconventional' triple in order to leave 60 or less with your last 2 darts. If you hit the intended triple it may leave you a 'bad' double but a bad double is better than no double at all.",
    },
    {
      range: "81-95",
      info: "Now you're into the finishes that require at least a Triple or a Bull. For most of these, it makes sense to go for SB on the first dart. It might seem strange but it means not having to hit a triple. If you only have 2 darts, you MUST hit a triple to finish so don't worry about the bull.",
    },
    {
      range: "96-110",
      info: "This range is the highest of the possible 2 dart finishes. What makes this range very interesting is that half of them cannot be finished with 2 darts. Welcome to the minefield! With 3 darts in your hand, pay attention to the numbers on either side of your target. If you stray and hit the number next door, will you still have a chance at a 2 dart finish, or will you guarantee your opponent another turn?",
    },
    {
      range: "111-119",
      info: "From here on, you'll need all three darts to finish. You'll need to know the danger spots from the previous range in order to avoid them.",
    },
    {
      range: "120-130",
      info: "This range is very interesting. It's very similar to the 60's. You must always shoot for the triple that will leave you a 2 dart finish if you only hit a single. You have to know the 100-110 range. If you do hit the triple, you're left with a 2 dart 60-something finish. (Learn those ones first!)\n\n128 & 129 should be avoided if possible. If you follow the above rule and only hit a single you'll be forced to hit a triple on your second dart.\n\nRemember that with 2 darts, if you're above 70 then you MUST hit a triple to finish. Being above 70 means that you lose the 'hail mary' throw at the DB.",
    },
    {
      range: "130-140",
      info: "This range is the first that requires you to hit 2 triples in order to finish. You have to know your 2 dart 70-something finishes The exception to the 2 triples rule is 132 and 135 where you can start with a SB.",
    },
    {
      range: "141-158",
      info: "These are tough and don't have safety nets. The good news is that they're simpler since you must hit 2 specific triples to finish them. You have to know your 2 dart 80-90's finishes.\n\nThere isn't much point worrying about whether the number is odd or even. Most likely there's going to be a T19 or T20 involved so just throw your first dart at the triple you're most comfortable with. If you get the triple, then you can evaluate where to go next. If you hit a single you can't finish it anyhow so keep pounding your favorite triple.\n\nEventually, you'll see how to get to a preferred finish for your next turn. It's important that you know the lower finishes before you have to worry about this aspect of the game.\n\nFor simplicity, you can start with T20 on all of these if you prefer.",
    },
    {
      range: "159-170",
      info: "You're at the end. Remember the minefield from 99-110? Here is the same minefield + 60. If you're starting your turn on one of the impossible finishes, the good news is that you don't have to worry about taking it out.\n\nWhen you're under 200 with one dart in hand, you need to avoiding shooting at a number where the single will leave you on an impossible finish. You can even look to the neighboring numbers and consider if there is a safety there as well.\n\nRemember that 158 and below are all safe for your next turn.\n\nFor example,\n\nIf you're at 195 with one dart left, the only single that will leave you an opportunity on you next turn would be SB.\n\nIf you're at 188 with one dart left, S20 would leave you stranded on 168, whereas S18 would leave 170.\n\nIf you're at 168 with one dart left, shooting at the T16 is a good option. It is surrounded by numbers that will guarantee you a chance at a finish on your next turn. T20, T19, T18, T17 all have traps around them.",
    },
  ];

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
                        <Badge variant="light" className="bg-primary text-dark">
                          {shot.label}
                        </Badge>
                      )}
                      {shot.label === "Professional" && (
                        <Badge variant="light" className="bg-success text-dark">
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
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
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
              {selectedRanges.includes("custom") && (
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
                </div>
              )}
              <Button
                variant="primary"
                size="lg"
                className="input-group-append"
                onClick={handleRandomOutShot}
              >
                Get Random Out Shot
              </Button>
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
