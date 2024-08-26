import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RiskZonePredictionModuleBase } from "./base/riskZonePrediction.module.base";
import { RiskZonePredictionService } from "./riskZonePrediction.service";
import { RiskZonePredictionController } from "./riskZonePrediction.controller";
import { RiskZonePredictionResolver } from "./riskZonePrediction.resolver";

@Module({
  imports: [RiskZonePredictionModuleBase, forwardRef(() => AuthModule)],
  controllers: [RiskZonePredictionController],
  providers: [RiskZonePredictionService, RiskZonePredictionResolver],
  exports: [RiskZonePredictionService],
})
export class RiskZonePredictionModule {}
