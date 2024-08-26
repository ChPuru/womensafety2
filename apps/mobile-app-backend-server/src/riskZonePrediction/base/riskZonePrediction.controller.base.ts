/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RiskZonePredictionService } from "../riskZonePrediction.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RiskZonePredictionCreateInput } from "./RiskZonePredictionCreateInput";
import { RiskZonePrediction } from "./RiskZonePrediction";
import { RiskZonePredictionFindManyArgs } from "./RiskZonePredictionFindManyArgs";
import { RiskZonePredictionWhereUniqueInput } from "./RiskZonePredictionWhereUniqueInput";
import { RiskZonePredictionUpdateInput } from "./RiskZonePredictionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RiskZonePredictionControllerBase {
  constructor(
    protected readonly service: RiskZonePredictionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RiskZonePrediction })
  @nestAccessControl.UseRoles({
    resource: "RiskZonePrediction",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRiskZonePrediction(
    @common.Body() data: RiskZonePredictionCreateInput
  ): Promise<RiskZonePrediction> {
    return await this.service.createRiskZonePrediction({
      data: {
        ...data,

        sensorData: data.sensorData
          ? {
              connect: data.sensorData,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        location: true,
        predictionTime: true,
        riskLevel: true,

        sensorData: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RiskZonePrediction] })
  @ApiNestedQuery(RiskZonePredictionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RiskZonePrediction",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async riskZonePredictions(
    @common.Req() request: Request
  ): Promise<RiskZonePrediction[]> {
    const args = plainToClass(RiskZonePredictionFindManyArgs, request.query);
    return this.service.riskZonePredictions({
      ...args,
      select: {
        createdAt: true,
        id: true,
        location: true,
        predictionTime: true,
        riskLevel: true,

        sensorData: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RiskZonePrediction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RiskZonePrediction",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async riskZonePrediction(
    @common.Param() params: RiskZonePredictionWhereUniqueInput
  ): Promise<RiskZonePrediction | null> {
    const result = await this.service.riskZonePrediction({
      where: params,
      select: {
        createdAt: true,
        id: true,
        location: true,
        predictionTime: true,
        riskLevel: true,

        sensorData: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RiskZonePrediction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RiskZonePrediction",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRiskZonePrediction(
    @common.Param() params: RiskZonePredictionWhereUniqueInput,
    @common.Body() data: RiskZonePredictionUpdateInput
  ): Promise<RiskZonePrediction | null> {
    try {
      return await this.service.updateRiskZonePrediction({
        where: params,
        data: {
          ...data,

          sensorData: data.sensorData
            ? {
                connect: data.sensorData,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          location: true,
          predictionTime: true,
          riskLevel: true,

          sensorData: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RiskZonePrediction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RiskZonePrediction",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRiskZonePrediction(
    @common.Param() params: RiskZonePredictionWhereUniqueInput
  ): Promise<RiskZonePrediction | null> {
    try {
      return await this.service.deleteRiskZonePrediction({
        where: params,
        select: {
          createdAt: true,
          id: true,
          location: true,
          predictionTime: true,
          riskLevel: true,

          sensorData: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
