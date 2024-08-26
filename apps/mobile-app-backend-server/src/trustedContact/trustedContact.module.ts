import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrustedContactModuleBase } from "./base/trustedContact.module.base";
import { TrustedContactService } from "./trustedContact.service";
import { TrustedContactController } from "./trustedContact.controller";
import { TrustedContactResolver } from "./trustedContact.resolver";

@Module({
  imports: [TrustedContactModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrustedContactController],
  providers: [TrustedContactService, TrustedContactResolver],
  exports: [TrustedContactService],
})
export class TrustedContactModule {}
