import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RiskZonePredictionService } from "./riskZonePrediction.service";
import { RiskZonePredictionControllerBase } from "./base/riskZonePrediction.controller.base";

@swagger.ApiTags("riskZonePredictions")
@common.Controller("riskZonePredictions")
export class RiskZonePredictionController extends RiskZonePredictionControllerBase {
  constructor(
    protected readonly service: RiskZonePredictionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
