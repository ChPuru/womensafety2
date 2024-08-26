import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SilentAlarmCreateInput = {
  activationTime?: Date | null;
  location?: InputJsonValue;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
