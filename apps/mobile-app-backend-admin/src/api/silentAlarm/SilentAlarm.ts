import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type SilentAlarm = {
  activationTime: Date | null;
  createdAt: Date;
  id: string;
  location: JsonValue;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
