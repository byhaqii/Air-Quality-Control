export type SettingItem = {
  title: string;
  description: string;
  enabled: boolean;
};

export const SETTINGS_ITEMS: SettingItem[] = [
  {
    title: "Live Sync",
    description: "Refresh dashboard values every 10 seconds.",
    enabled: true,
  },
  {
    title: "Alert Notifications",
    description: "Send alerts when AQI crosses the warning threshold.",
    enabled: true,
  },
  {
    title: "Auto Export",
    description: "Generate a weekly summary in CSV format.",
    enabled: false,
  },
];