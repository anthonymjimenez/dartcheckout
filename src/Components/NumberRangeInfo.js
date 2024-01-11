import { Accordion } from "react-bootstrap";

const NumberRangeInfo = ({ bannerData, currentNumber }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="font-weight-bold">
          {bannerData.map((item) =>
            currentNumber >= parseInt(item.range.split("-")[0]) &&
            currentNumber <= parseInt(item.range.split("-")[1]) ? (
              <span key={item.range}>{`Info about ${item.range} Range:`}</span>
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
  );
};

export default NumberRangeInfo;
