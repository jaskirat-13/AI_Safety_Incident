// src/App.tsx

import { useState } from 'react';
import { Incident } from './types/Incident';
import { mockData } from './data/mockData';
import './app.css';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockData);
  const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');
  const [sortOrder, setSortOrder] = useState<'Newest' | 'Oldest'>('Newest');
  const [newIncident, setNewIncident] = useState({ title: '', description: '', severity: 'Low' });
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as any);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as any);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewIncident({ ...newIncident, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIncident.title.trim() || !newIncident.description.trim()) {
      alert('Please fill all fields');
      return;
    }
    const newEntry: Incident = {
      id: Date.now(),
      title: newIncident.title,
      description: newIncident.description,
      severity: newIncident.severity as 'Low' | 'Medium' | 'High',
      reported_at: new Date().toISOString(),
    };
    setIncidents([newEntry, ...incidents]);
    setNewIncident({ title: '', description: '', severity: 'Low' });
  };

  const toggleExpand = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(expandedId => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const filteredIncidents = incidents.filter(incident =>
    filter === 'All' ? true : incident.severity === filter
  );

  const sortedIncidents = filteredIncidents.sort((a, b) => {
    if (sortOrder === 'Newest') {
      return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
    } else {
      return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
    }
  });

  return (
    <div className="container">
      <h1 className="dashboard-title">AI Safety Incident Dashboard</h1>
  <p className="dashboard-subtitle">
    A centralized dashboard to monitor and manage AI safety incidents, ensuring reliability and trust in AI systems.
  </p>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newIncident.title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newIncident.description}
          onChange={handleInputChange}
          rows={3}
        />
        <select name="severity" value={newIncident.severity} onChange={handleInputChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Submit Incident</button>
      </form>

      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select value={sortOrder} onChange={handleSortChange}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      {sortedIncidents.map(incident => (
        <div key={incident.id} className="incident-card">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div><strong>{incident.title}</strong></div>
            <div className={`badge ${incident.severity.toLowerCase()}`}>
  {incident.severity}
</div>

          </div>
          <div>{new Date(incident.reported_at).toLocaleDateString()}</div>
          <button className="view-details" onClick={() => toggleExpand(incident.id)}>
            {expandedIds.includes(incident.id) ? 'Hide Details' : 'View Details'}
          </button>
          {expandedIds.includes(incident.id) && (
            <div className="description">{incident.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
