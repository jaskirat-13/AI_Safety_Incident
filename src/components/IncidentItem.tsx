import { useState } from "react";
import { Incident } from "../types/Incident";

interface IncidentItemProps {
  incident: Incident;
}

function IncidentItem({ incident }: IncidentItemProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="incident-item">
      <div className="incident-header">
        <h3>{incident.title}</h3>
        <span className={`severity ${incident.severity.toLowerCase()}`}>{incident.severity}</span>
        <small>{new Date(incident.reported_at).toLocaleDateString()}</small>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
      {showDetails && <p className="incident-description">{incident.description}</p>}
    </div>
  );
}

export default IncidentItem;
