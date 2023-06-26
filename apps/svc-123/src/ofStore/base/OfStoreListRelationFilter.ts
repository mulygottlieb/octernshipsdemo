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
import { OfStoreWhereInput } from "./OfStoreWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OfStoreListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OfStoreWhereInput,
  })
  @ValidateNested()
  @Type(() => OfStoreWhereInput)
  @IsOptional()
  @Field(() => OfStoreWhereInput, {
    nullable: true,
  })
  every?: OfStoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => OfStoreWhereInput,
  })
  @ValidateNested()
  @Type(() => OfStoreWhereInput)
  @IsOptional()
  @Field(() => OfStoreWhereInput, {
    nullable: true,
  })
  some?: OfStoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => OfStoreWhereInput,
  })
  @ValidateNested()
  @Type(() => OfStoreWhereInput)
  @IsOptional()
  @Field(() => OfStoreWhereInput, {
    nullable: true,
  })
  none?: OfStoreWhereInput;
}
export { OfStoreListRelationFilter as OfStoreListRelationFilter };