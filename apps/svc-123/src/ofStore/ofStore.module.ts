import { Module } from "@nestjs/common";
import { OfStoreModuleBase } from "./base/ofStore.module.base";
import { OfStoreService } from "./ofStore.service";
import { OfStoreController } from "./ofStore.controller";
import { OfStoreResolver } from "./ofStore.resolver";

@Module({
  imports: [OfStoreModuleBase],
  controllers: [OfStoreController],
  providers: [OfStoreService, OfStoreResolver],
  exports: [OfStoreService],
})
export class OfStoreModule {}
