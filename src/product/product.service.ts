import { Injectable } from '@nestjs/common';
import type { CreateProductDtoOutput } from 'packages/contracts/src';
import  { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {

   constructor(
      private readonly prisma : PrismaService
   ){}

   async create( dto: CreateProductDtoOutput){
      return await this.prisma.product.create({
         data: dto
      })
   }
}
