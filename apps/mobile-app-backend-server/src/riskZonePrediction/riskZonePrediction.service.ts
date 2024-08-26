import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RiskZonePredictionServiceBase } from "./base/riskZonePrediction.service.base";

@Injectable()
export class RiskZonePredictionService extends RiskZonePredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
