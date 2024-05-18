/*
  Warnings:

  - You are about to drop the column `note` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "note" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "note";
