import { AlertListRelationFilter } from "../alert/AlertListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SilentAlarmListRelationFilter } from "../silentAlarm/SilentAlarmListRelationFilter";
import { TrustedContactListRelationFilter } from "../trustedContact/TrustedContactListRelationFilter";

export type UserWhereInput = {
  alerts?: AlertListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  silentAlarms?: SilentAlarmListRelationFilter;
  trustedContacts?: TrustedContactListRelationFilter;
  username?: StringFilter;
};
