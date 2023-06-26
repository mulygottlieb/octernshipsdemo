import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OfStoreService } from "./ofStore.service";
import { OfStoreControllerBase } from "./base/ofStore.controller.base";

@swagger.ApiTags("ofStores")
@common.Controller("ofStores")
export class OfStoreController extends OfStoreControllerBase {
  constructor(
    protected readonly service: OfStoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
