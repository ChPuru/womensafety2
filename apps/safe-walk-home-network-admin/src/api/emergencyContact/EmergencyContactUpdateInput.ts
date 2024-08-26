import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmergencyContactUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  relation?: string | null;
  user?: UserWhereUniqueInput | null;
};
