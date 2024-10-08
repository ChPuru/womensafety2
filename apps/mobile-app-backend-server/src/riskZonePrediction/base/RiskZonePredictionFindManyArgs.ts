/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RiskZonePredictionWhereInput } from "./RiskZonePredictionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RiskZonePredictionOrderByInput } from "./RiskZonePredictionOrderByInput";

@ArgsType()
class RiskZonePredictionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RiskZonePredictionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RiskZonePredictionWhereInput, { nullable: true })
  @Type(() => RiskZonePredictionWhereInput)
  where?: RiskZonePredictionWhereInput;

  @ApiProperty({
    required: false,
    type: [RiskZonePredictionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RiskZonePredictionOrderByInput], { nullable: true })
  @Type(() => RiskZonePredictionOrderByInput)
  orderBy?: Array<RiskZonePredictionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RiskZonePredictionFindManyArgs as RiskZonePredictionFindManyArgs };
