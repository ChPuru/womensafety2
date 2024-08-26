import { Alert } from "../alert/Alert";
import { JsonValue } from "type-fest";
import { SilentAlarm } from "../silentAlarm/SilentAlarm";
import { TrustedContact } from "../trustedContact/TrustedContact";

export type User = {
  alerts?: Array<Alert>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  silentAlarms?: Array<SilentAlarm>;
  trustedContacts?: Array<TrustedContact>;
  updatedAt: Date;
  username: string;
};
