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
import { Po3aorderWhereUniqueInput } from "./Po3aorderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeletePo3aorderArgs {
  @ApiProperty({
    required: true,
    type: () => Po3aorderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Po3aorderWhereUniqueInput)
  @Field(() => Po3aorderWhereUniqueInput, { nullable: false })
  where!: Po3aorderWhereUniqueInput;
}

export { DeletePo3aorderArgs as DeletePo3aorderArgs };
