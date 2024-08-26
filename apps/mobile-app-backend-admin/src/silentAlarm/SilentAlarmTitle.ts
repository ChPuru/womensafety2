import { SilentAlarm as TSilentAlarm } from "../api/silentAlarm/SilentAlarm";

export const SILENTALARM_TITLE_FIELD = "status";

export const SilentAlarmTitle = (record: TSilentAlarm): string => {
  return record.status?.toString() || String(record.id);
};
