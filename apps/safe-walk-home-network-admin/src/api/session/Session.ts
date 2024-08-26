import { ChatMessage } from "../chatMessage/ChatMessage";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Session = {
  chatMessages?: Array<ChatMessage>;
  createdAt: Date;
  endTime: Date | null;
  id: string;
  location: JsonValue;
  startTime: Date | null;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
