import { SortOrder } from "../../util/SortOrder";

export type SilentAlarmOrderByInput = {
  activationTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
