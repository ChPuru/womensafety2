import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type ChatMessageCreateInput = {
  messageContent?: string | null;
  senderId?: string | null;
  sentAt?: Date | null;
  session?: SessionWhereUniqueInput | null;
};
