import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlertUpdateInput = {
  alertTime?: Date | null;
  alertType?: string | null;
  location?: InputJsonValue;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
