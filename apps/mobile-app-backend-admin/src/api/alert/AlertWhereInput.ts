import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlertWhereInput = {
  alertTime?: DateTimeNullableFilter;
  alertType?: StringNullableFilter;
  id?: StringFilter;
  location?: JsonFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
