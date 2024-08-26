import { AlertCreateNestedManyWithoutUsersInput } from "./AlertCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SilentAlarmCreateNestedManyWithoutUsersInput } from "./SilentAlarmCreateNestedManyWithoutUsersInput";
import { TrustedContactCreateNestedManyWithoutUsersInput } from "./TrustedContactCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  alerts?: AlertCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  silentAlarms?: SilentAlarmCreateNestedManyWithoutUsersInput;
  trustedContacts?: TrustedContactCreateNestedManyWithoutUsersInput;
  username: string;
};
