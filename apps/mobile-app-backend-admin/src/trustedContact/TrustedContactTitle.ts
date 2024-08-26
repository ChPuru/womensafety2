import { TrustedContact as TTrustedContact } from "../api/trustedContact/TrustedContact";

export const TRUSTEDCONTACT_TITLE_FIELD = "firstName";

export const TrustedContactTitle = (record: TTrustedContact): string => {
  return record.firstName?.toString() || String(record.id);
};
