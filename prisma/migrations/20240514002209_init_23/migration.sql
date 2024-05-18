-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "totalPrice" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "orderDetailId" DROP NOT NULL;
