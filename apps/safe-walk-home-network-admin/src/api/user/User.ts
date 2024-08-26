import { EmergencyContact } from "../emergencyContact/EmergencyContact";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  createdAt: Date;
  email: string | null;
  emergencyContacts?: Array<EmergencyContact>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string;
};
