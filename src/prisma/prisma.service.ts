import { Injectable, type OnModuleDestroy, type OnModuleInit } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "packages/contracts/generated/prisma";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
   constructor() {
    super({
      adapter: new PrismaPg({ connectionString: process.env.DIRECT_DATABASE_URL})
    });
  }
   async onModuleDestroy() {
      await this.$disconnect()
   }
   async onModuleInit() {
      await this.$connect() 
   }
   
}