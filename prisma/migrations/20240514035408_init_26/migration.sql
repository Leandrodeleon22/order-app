/*
  Warnings:

  - You are about to drop the column `tableId` on the `Feedback` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_tableId_fkey";

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "tableId";
