/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { RiskZonePredictionUpdateManyWithoutSensorDataItemsInput } from "./RiskZonePredictionUpdateManyWithoutSensorDataItemsInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class SensorDataUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deviceId?: string | null;

  @ApiProperty({
    required: false,
    type: () => RiskZonePredictionUpdateManyWithoutSensorDataItemsInput,
  })
  @ValidateNested()
  @Type(() => RiskZonePredictionUpdateManyWithoutSensorDataItemsInput)
  @IsOptional()
  @Field(() => RiskZonePredictionUpdateManyWithoutSensorDataItemsInput, {
    nullable: true,
  })
  riskZonePredictions?: RiskZonePredictionUpdateManyWithoutSensorDataItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sensorType?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  value?: InputJsonValue;
}

export { SensorDataUpdateInput as SensorDataUpdateInput };
