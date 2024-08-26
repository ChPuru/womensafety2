import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageContent?: SortOrder;
  senderId?: SortOrder;
  sentAt?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
};
