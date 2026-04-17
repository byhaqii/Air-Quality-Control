import type { AnomalyRecord, Device, HistoryPoint, Metric } from "@/types/dashboard";

export const liveIndex = 42;

export const metrics: Metric[] = [
  { label: "PM2.5", value: "12.4", unit: "ug/m3", trend: "-2.4%" },
  { label: "Carbon Dioxide", value: "415", unit: "ppm", trend: "+1.2%" },
  { label: "Temperature", value: "22.5", unit: "C", trend: "0%" },
  { label: "Relative Humidity", value: "45", unit: "%", trend: "-5.1%" },
];

export const historyData: HistoryPoint[] = [
  { day: "Oct 1", aqi: 60 },
  { day: "Oct 5", aqi: 84 },
  { day: "Oct 10", aqi: 106 },
  { day: "Oct 15", aqi: 99 },
  { day: "Oct 20", aqi: 130 },
  { day: "Oct 25", aqi: 91 },
  { day: "Oct 31", aqi: 68 },
];

export const anomalies: AnomalyRecord[] = [
  {
    time: "Oct 15, 14:32:00",
    sensorId: "SNSR-A-092",
    pm25: "128.4",
    co2: "412",
    temperature: "24.2",
    status: "Elevated",
  },
  {
    time: "Oct 15, 14:15:00",
    sensorId: "SNSR-B-114",
    pm25: "42.1",
    co2: "405",
    temperature: "23.8",
    status: "Optimal",
  },
  {
    time: "Oct 15, 14:00:00",
    sensorId: "SNSR-A-092",
    pm25: "38.5",
    co2: "398",
    temperature: "23.5",
    status: "Optimal",
  },
  {
    time: "Oct 14, 08:45:00",
    sensorId: "SNSR-C-095",
    pm25: "55.2",
    co2: "850",
    temperature: "21.0",
    status: "Moderate",
  },
];

export const devices: Device[] = [
  {
    id: "alpha-01",
    name: "Alpha-01",
    location: "Main Lab",
    type: "Particulate Matter (PM2.5)",
    status: "Online",
    lastActive: "Just now",
    firmware: "v2.4.1",
  },
  {
    id: "beta-04",
    name: "Beta-04",
    location: "Server Room A",
    type: "Temperature and Humidity",
    status: "Online",
    lastActive: "2m ago",
    firmware: "v2.4.0",
  },
  {
    id: "gamma-12",
    name: "Gamma-12",
    location: "Loading Dock",
    type: "VOC Monitor",
    status: "Offline",
    lastActive: "14h ago",
    firmware: "v2.3.8",
  },
  {
    id: "delta-09",
    name: "Delta-09",
    location: "Clean Room 2",
    type: "Multi-Sensor Array",
    status: "Online",
    lastActive: "5s ago",
    firmware: "v2.4.1",
  },
];
