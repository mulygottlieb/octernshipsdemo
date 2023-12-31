/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OfStore, Po3aorder } from "@prisma/client";

export class OfStoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OfStoreCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfStoreCountArgs>
  ): Promise<number> {
    return this.prisma.ofStore.count(args);
  }

  async findMany<T extends Prisma.OfStoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfStoreFindManyArgs>
  ): Promise<OfStore[]> {
    return this.prisma.ofStore.findMany(args);
  }
  async findOne<T extends Prisma.OfStoreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfStoreFindUniqueArgs>
  ): Promise<OfStore | null> {
    return this.prisma.ofStore.findUnique(args);
  }
  async create<T extends Prisma.OfStoreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfStoreCreateArgs>
  ): Promise<OfStore> {
    return this.prisma.ofStore.create<T>(args);
  }
  async update<T extends Prisma.OfStoreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfStoreUpdateArgs>
  ): Promise<OfStore> {
    return this.prisma.ofStore.update<T>(args);
  }
  async delete<T extends Prisma.OfStoreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfStoreDeleteArgs>
  ): Promise<OfStore> {
    return this.prisma.ofStore.delete(args);
  }

  async findPo3aorders(
    parentId: string,
    args: Prisma.Po3aorderFindManyArgs
  ): Promise<Po3aorder[]> {
    return this.prisma.ofStore
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .po3aorders(args);
  }
}
