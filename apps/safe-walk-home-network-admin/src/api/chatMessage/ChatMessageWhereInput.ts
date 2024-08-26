import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type ChatMessageWhereInput = {
  id?: StringFilter;
  messageContent?: StringNullableFilter;
  senderId?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  session?: SessionWhereUniqueInput;
};
