import { useState } from "react";
import { Incident } from "../types/Incident";
import IncidentItem from "./IncidentItem";

interface IncidentListProps {
  incidents: Incident[];
}

function IncidentList({ incidents }: IncidentListProps) {
  const [filter, setFilter] = useState<"All" | "Low" | "Medium" | "High">("All");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");

  const filteredIncidents = incidents.filter((incident) =>
    filter === "All" ? true : incident.severity === filter
  );

  const sortedIncidents = filteredIncidents.sort((a, b) => {
    if (sortOrder === "Newest") {
      return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
    }
    return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
  });

  return (
    <div className="incident-list">
      <div className="controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as any)}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
      {sortedIncidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
}

export default IncidentList;
