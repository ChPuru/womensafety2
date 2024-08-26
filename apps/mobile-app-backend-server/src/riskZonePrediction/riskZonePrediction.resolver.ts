import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RiskZonePredictionResolverBase } from "./base/riskZonePrediction.resolver.base";
import { RiskZonePrediction } from "./base/RiskZonePrediction";
import { RiskZonePredictionService } from "./riskZonePrediction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RiskZonePrediction)
export class RiskZonePredictionResolver extends RiskZonePredictionResolverBase {
  constructor(
    protected readonly service: RiskZonePredictionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
