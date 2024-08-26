import { EmergencyContact as TEmergencyContact } from "../api/emergencyContact/EmergencyContact";

export const EMERGENCYCONTACT_TITLE_FIELD = "firstName";

export const EmergencyContactTitle = (record: TEmergencyContact): string => {
  return record.firstName?.toString() || String(record.id);
};
