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
import { TrustedContactWhereInput } from "./TrustedContactWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TrustedContactOrderByInput } from "./TrustedContactOrderByInput";

@ArgsType()
class TrustedContactFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TrustedContactWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TrustedContactWhereInput, { nullable: true })
  @Type(() => TrustedContactWhereInput)
  where?: TrustedContactWhereInput;

  @ApiProperty({
    required: false,
    type: [TrustedContactOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TrustedContactOrderByInput], { nullable: true })
  @Type(() => TrustedContactOrderByInput)
  orderBy?: Array<TrustedContactOrderByInput>;

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

export { TrustedContactFindManyArgs as TrustedContactFindManyArgs };
