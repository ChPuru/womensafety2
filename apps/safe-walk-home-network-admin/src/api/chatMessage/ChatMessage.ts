import { Session } from "../session/Session";

export type ChatMessage = {
  createdAt: Date;
  id: string;
  messageContent: string | null;
  senderId: string | null;
  sentAt: Date | null;
  session?: Session | null;
  updatedAt: Date;
};
