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
import { Po3aorderWhereInput } from "./Po3aorderWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Po3aorderCountArgs {
  @ApiProperty({
    required: false,
    type: () => Po3aorderWhereInput,
  })
  @Field(() => Po3aorderWhereInput, { nullable: true })
  @Type(() => Po3aorderWhereInput)
  where?: Po3aorderWhereInput;
}

export { Po3aorderCountArgs as Po3aorderCountArgs };
