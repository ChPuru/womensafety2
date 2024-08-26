import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SilentAlarmModuleBase } from "./base/silentAlarm.module.base";
import { SilentAlarmService } from "./silentAlarm.service";
import { SilentAlarmController } from "./silentAlarm.controller";
import { SilentAlarmResolver } from "./silentAlarm.resolver";

@Module({
  imports: [SilentAlarmModuleBase, forwardRef(() => AuthModule)],
  controllers: [SilentAlarmController],
  providers: [SilentAlarmService, SilentAlarmResolver],
  exports: [SilentAlarmService],
})
export class SilentAlarmModule {}
