/*
  Warnings:

  - You are about to drop the column `orderStatus` on the `Order` table. All the data in the column will be lost.
  - Added the required column `orderStatus` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderStatus";

-- AlterTable
ALTER TABLE "Table" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "orderStatus" TEXT NOT NULL;
