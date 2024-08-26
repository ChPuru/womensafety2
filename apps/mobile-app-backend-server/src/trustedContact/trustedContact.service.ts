import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrustedContactServiceBase } from "./base/trustedContact.service.base";

@Injectable()
export class TrustedContactService extends TrustedContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
