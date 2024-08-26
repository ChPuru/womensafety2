import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SilentAlarmResolverBase } from "./base/silentAlarm.resolver.base";
import { SilentAlarm } from "./base/SilentAlarm";
import { SilentAlarmService } from "./silentAlarm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SilentAlarm)
export class SilentAlarmResolver extends SilentAlarmResolverBase {
  constructor(
    protected readonly service: SilentAlarmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
