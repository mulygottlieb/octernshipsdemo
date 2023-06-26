import { Module } from "@nestjs/common";
import { Po3aorderModuleBase } from "./base/po3aorder.module.base";
import { Po3aorderService } from "./po3aorder.service";
import { Po3aorderController } from "./po3aorder.controller";
import { Po3aorderResolver } from "./po3aorder.resolver";

@Module({
  imports: [Po3aorderModuleBase],
  controllers: [Po3aorderController],
  providers: [Po3aorderService, Po3aorderResolver],
  exports: [Po3aorderService],
})
export class Po3aorderModule {}
