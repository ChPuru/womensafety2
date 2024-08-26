import { ChatMessageCreateNestedManyWithoutSessionsInput } from "./ChatMessageCreateNestedManyWithoutSessionsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  chatMessages?: ChatMessageCreateNestedManyWithoutSessionsInput;
  endTime?: Date | null;
  location?: InputJsonValue;
  startTime?: Date | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
