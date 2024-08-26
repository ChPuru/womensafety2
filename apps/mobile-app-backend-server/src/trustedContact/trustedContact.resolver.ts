import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TrustedContactResolverBase } from "./base/trustedContact.resolver.base";
import { TrustedContact } from "./base/TrustedContact";
import { TrustedContactService } from "./trustedContact.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TrustedContact)
export class TrustedContactResolver extends TrustedContactResolverBase {
  constructor(
    protected readonly service: TrustedContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
