import { SilentAlarmWhereInput } from "./SilentAlarmWhereInput";
import { SilentAlarmOrderByInput } from "./SilentAlarmOrderByInput";

export type SilentAlarmFindManyArgs = {
  where?: SilentAlarmWhereInput;
  orderBy?: Array<SilentAlarmOrderByInput>;
  skip?: number;
  take?: number;
};
