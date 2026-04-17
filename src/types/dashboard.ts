export type Metric = {
  label: string;
  value: string;
  unit?: string;
  trend?: string;
};

export type Device = {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "Online" | "Offline";
  lastActive: string;
  firmware: string;
};

export type HistoryPoint = {
  day: string;
  aqi: number;
};

export type AnomalyRecord = {
  time: string;
  sensorId: string;
  pm25: string;
  co2: string;
  temperature: string;
  status: "Elevated" | "Optimal" | "Moderate";
};
