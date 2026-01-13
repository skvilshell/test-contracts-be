import type z from "zod";
import { ProductEntitySchema } from "../entities";

export const CreateProductDtoSchema =  ProductEntitySchema.pick({ 
   sizes: true,
   category: true,
   colors: true,
   title: true
})

export type CreateProductDtoInput = z.input<typeof CreateProductDtoSchema>
export type CreateProductDtoOutput = z.output<typeof CreateProductDtoSchema>