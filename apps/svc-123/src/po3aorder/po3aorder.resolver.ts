import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Po3aorderResolverBase } from "./base/po3aorder.resolver.base";
import { Po3aorder } from "./base/Po3aorder";
import { Po3aorderService } from "./po3aorder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Po3aorder)
export class Po3aorderResolver extends Po3aorderResolverBase {
  constructor(
    protected readonly service: Po3aorderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
