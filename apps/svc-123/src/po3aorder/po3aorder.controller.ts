import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Po3aorderService } from "./po3aorder.service";
import { Po3aorderControllerBase } from "./base/po3aorder.controller.base";

@swagger.ApiTags("po3aorders")
@common.Controller("po3aorders")
export class Po3aorderController extends Po3aorderControllerBase {
  constructor(
    protected readonly service: Po3aorderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
