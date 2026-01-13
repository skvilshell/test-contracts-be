import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import type { CreateProductDtoOutput } from 'packages/contracts/src';

@Controller('product')
export class ProductController {

   constructor(
      private readonly productService: ProductService
   ){}

   @Post()
   async createProductContler(@Body() dto: CreateProductDtoOutput){
      return await this.productService.create(dto)
   }
}
