// src/types/incident.ts

export interface Incident {
    id: number;
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High';
    reported_at: string;
  }
  