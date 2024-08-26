import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SilentAlarmService } from "./silentAlarm.service";
import { SilentAlarmControllerBase } from "./base/silentAlarm.controller.base";

@swagger.ApiTags("silentAlarms")
@common.Controller("silentAlarms")
export class SilentAlarmController extends SilentAlarmControllerBase {
  constructor(
    protected readonly service: SilentAlarmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
