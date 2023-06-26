import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Po3aorderServiceBase } from "./base/po3aorder.service.base";

@Injectable()
export class Po3aorderService extends Po3aorderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
