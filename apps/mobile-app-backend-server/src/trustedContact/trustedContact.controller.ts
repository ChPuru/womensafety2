import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrustedContactService } from "./trustedContact.service";
import { TrustedContactControllerBase } from "./base/trustedContact.controller.base";

@swagger.ApiTags("trustedContacts")
@common.Controller("trustedContacts")
export class TrustedContactController extends TrustedContactControllerBase {
  constructor(
    protected readonly service: TrustedContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
