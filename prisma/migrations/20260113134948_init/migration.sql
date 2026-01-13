-- CreateEnum
CREATE TYPE "CategoryTitle" AS ENUM ('tShirt', 'tShirtPolo', 'cap');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('pink', 'white', 'black');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateTable
CREATE TABLE "category" (
    "category" "CategoryTitle" NOT NULL,
    "title" VARCHAR(100) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category")
);

-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "colors" "Color"[],
    "sizes" "Size"[],
    "category" "CategoryTitle" NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT NOT NULL,
    "colors" "Color"[],

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warehouse" (
    "productId" UUID NOT NULL,
    "color" "Color" NOT NULL,
    "size" "Size" NOT NULL,
    "rest" INTEGER NOT NULL,

    CONSTRAINT "warehouse_pkey" PRIMARY KEY ("productId","color","size")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_category_fkey" FOREIGN KEY ("category") REFERENCES "category"("category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "warehouse" ADD CONSTRAINT "warehouse_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
