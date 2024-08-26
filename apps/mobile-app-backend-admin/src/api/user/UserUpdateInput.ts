import { AlertUpdateManyWithoutUsersInput } from "./AlertUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SilentAlarmUpdateManyWithoutUsersInput } from "./SilentAlarmUpdateManyWithoutUsersInput";
import { TrustedContactUpdateManyWithoutUsersInput } from "./TrustedContactUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  alerts?: AlertUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  silentAlarms?: SilentAlarmUpdateManyWithoutUsersInput;
  trustedContacts?: TrustedContactUpdateManyWithoutUsersInput;
  username?: string;
};
