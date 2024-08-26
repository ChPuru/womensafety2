import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "status";

export const SessionTitle = (record: TSession): string => {
  return record.status?.toString() || String(record.id);
};
