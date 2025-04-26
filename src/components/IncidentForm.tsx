import { useState } from "react";
import { Incident } from "../types/Incident";

interface IncidentFormProps {
  onAddIncident: (incident: Omit<Incident, "id" | "reported_at">) => void;
}

function IncidentForm({ onAddIncident }: IncidentFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<Incident["severity"]>("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    onAddIncident({ title, description, severity });
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h2>Report New Incident</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={severity} onChange={(e) => setSeverity(e.target.value as Incident["severity"])}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit Incident</button>
    </form>
  );
}

export default IncidentForm;
