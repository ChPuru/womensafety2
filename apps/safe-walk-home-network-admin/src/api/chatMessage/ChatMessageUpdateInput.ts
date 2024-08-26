import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type ChatMessageUpdateInput = {
  messageContent?: string | null;
  senderId?: string | null;
  sentAt?: Date | null;
  session?: SessionWhereUniqueInput | null;
};
