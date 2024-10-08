/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EmergencyContact as PrismaEmergencyContact,
  User as PrismaUser,
} from "@prisma/client";

export class EmergencyContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmergencyContactCountArgs, "select">
  ): Promise<number> {
    return this.prisma.emergencyContact.count(args);
  }

  async emergencyContacts(
    args: Prisma.EmergencyContactFindManyArgs
  ): Promise<PrismaEmergencyContact[]> {
    return this.prisma.emergencyContact.findMany(args);
  }
  async emergencyContact(
    args: Prisma.EmergencyContactFindUniqueArgs
  ): Promise<PrismaEmergencyContact | null> {
    return this.prisma.emergencyContact.findUnique(args);
  }
  async createEmergencyContact(
    args: Prisma.EmergencyContactCreateArgs
  ): Promise<PrismaEmergencyContact> {
    return this.prisma.emergencyContact.create(args);
  }
  async updateEmergencyContact(
    args: Prisma.EmergencyContactUpdateArgs
  ): Promise<PrismaEmergencyContact> {
    return this.prisma.emergencyContact.update(args);
  }
  async deleteEmergencyContact(
    args: Prisma.EmergencyContactDeleteArgs
  ): Promise<PrismaEmergencyContact> {
    return this.prisma.emergencyContact.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.emergencyContact
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
