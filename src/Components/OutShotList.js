import { Badge } from "react-bootstrap";

const OutShotList = ({ outShots }) => {
  return (
    <>
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
                      {shot.label === "Two Dart Safety" && (
                        <Badge variant="light" className="bg-info text-dark">
                          {shot.label}
                        </Badge>
                      )}
                      {shot.label === "Avoid" && (
                        <Badge variant="light" className="bg-danger text-dark">
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
    </>
  );
};

export default OutShotList;
