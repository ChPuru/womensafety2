import { SortOrder } from "../../util/SortOrder";

export type AlertOrderByInput = {
  alertTime?: SortOrder;
  alertType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
