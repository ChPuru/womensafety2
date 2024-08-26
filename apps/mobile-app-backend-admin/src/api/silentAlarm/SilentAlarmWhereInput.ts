import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SilentAlarmWhereInput = {
  activationTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: JsonFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
