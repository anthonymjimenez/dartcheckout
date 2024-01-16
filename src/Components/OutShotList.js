import { Badge } from "react-bootstrap";

// Helper function to render badges based on the shot label
const renderBadge = (label) => {
  const badgeVariant = {
    Practical: "bg-primary text-dark",
    Professional: "bg-success text-dark",
    Alternative: "bg-secondary text-dark",
    "Two Dart Safety": "bg-info text-dark",
    Avoid: "bg-danger text-dark",
  };

  return (
    <Badge variant="light" className={badgeVariant[label]}>
      {label}
    </Badge>
  );
};

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
                      {shot.label && renderBadge(shot.label)}
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
