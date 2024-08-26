import { ChatMessageListRelationFilter } from "../chatMessage/ChatMessageListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  chatMessages?: ChatMessageListRelationFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: JsonFilter;
  startTime?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
