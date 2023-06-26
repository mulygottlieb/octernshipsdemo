import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OfStoreServiceBase } from "./base/ofStore.service.base";

@Injectable()
export class OfStoreService extends OfStoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
