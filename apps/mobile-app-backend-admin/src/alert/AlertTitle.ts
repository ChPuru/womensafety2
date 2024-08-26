import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "alertType";

export const AlertTitle = (record: TAlert): string => {
  return record.alertType?.toString() || String(record.id);
};
