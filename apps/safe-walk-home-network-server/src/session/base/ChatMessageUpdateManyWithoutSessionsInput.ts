/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ChatMessageWhereUniqueInput } from "../../chatMessage/base/ChatMessageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ChatMessageUpdateManyWithoutSessionsInput {
  @Field(() => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ChatMessageWhereUniqueInput],
  })
  connect?: Array<ChatMessageWhereUniqueInput>;

  @Field(() => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ChatMessageWhereUniqueInput],
  })
  disconnect?: Array<ChatMessageWhereUniqueInput>;

  @Field(() => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ChatMessageWhereUniqueInput],
  })
  set?: Array<ChatMessageWhereUniqueInput>;
}

export { ChatMessageUpdateManyWithoutSessionsInput as ChatMessageUpdateManyWithoutSessionsInput };
