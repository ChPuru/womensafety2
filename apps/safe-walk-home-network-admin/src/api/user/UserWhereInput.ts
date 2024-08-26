import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmergencyContactListRelationFilter } from "../emergencyContact/EmergencyContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emergencyContacts?: EmergencyContactListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  username?: StringFilter;
};
