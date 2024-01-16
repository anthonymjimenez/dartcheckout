import { Accordion } from "react-bootstrap";

const NumberRangeInfo = ({ bannerData, currentNumber }) => {
  // Find the matching range for the currentNumber
  const currentRange = bannerData.find(
    (item) => currentNumber >= item.lowRange && currentNumber <= item.highRange
  );

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="font-weight-bold">
          {currentRange && (
            <span>{`Info about ${currentRange.range} Range:`}</span>
          )}
        </Accordion.Header>
        <Accordion.Body>
          {currentRange && <div className="mb-2">{currentRange.info}</div>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default NumberRangeInfo;
