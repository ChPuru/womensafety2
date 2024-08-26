import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Alert = {
  alertTime: Date | null;
  alertType: string | null;
  createdAt: Date;
  id: string;
  location: JsonValue;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
