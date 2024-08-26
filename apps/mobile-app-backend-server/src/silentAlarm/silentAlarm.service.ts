import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SilentAlarmServiceBase } from "./base/silentAlarm.service.base";

@Injectable()
export class SilentAlarmService extends SilentAlarmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
