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
  SilentAlarm as PrismaSilentAlarm,
  User as PrismaUser,
} from "@prisma/client";

export class SilentAlarmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SilentAlarmCountArgs, "select">
  ): Promise<number> {
    return this.prisma.silentAlarm.count(args);
  }

  async silentAlarms(
    args: Prisma.SilentAlarmFindManyArgs
  ): Promise<PrismaSilentAlarm[]> {
    return this.prisma.silentAlarm.findMany(args);
  }
  async silentAlarm(
    args: Prisma.SilentAlarmFindUniqueArgs
  ): Promise<PrismaSilentAlarm | null> {
    return this.prisma.silentAlarm.findUnique(args);
  }
  async createSilentAlarm(
    args: Prisma.SilentAlarmCreateArgs
  ): Promise<PrismaSilentAlarm> {
    return this.prisma.silentAlarm.create(args);
  }
  async updateSilentAlarm(
    args: Prisma.SilentAlarmUpdateArgs
  ): Promise<PrismaSilentAlarm> {
    return this.prisma.silentAlarm.update(args);
  }
  async deleteSilentAlarm(
    args: Prisma.SilentAlarmDeleteArgs
  ): Promise<PrismaSilentAlarm> {
    return this.prisma.silentAlarm.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.silentAlarm
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
