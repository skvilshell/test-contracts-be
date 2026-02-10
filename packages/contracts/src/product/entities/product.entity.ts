
import z from "zod";
import { $Enums, type Product } from "../../generated/prisma";

export const ProductEntitySchema = z.object({
   id: z.string(),
   category: z.enum($Enums.CategoryTitle),
   colors: z.array(z.enum($Enums.Color)),
   sizes: z.array(z.enum($Enums.Size)),
title: z.string()
}) satisfies z.ZodType<Product>