import { ChatMessageUpdateManyWithoutSessionsInput } from "./ChatMessageUpdateManyWithoutSessionsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  chatMessages?: ChatMessageUpdateManyWithoutSessionsInput;
  endTime?: Date | null;
  location?: InputJsonValue;
  startTime?: Date | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
