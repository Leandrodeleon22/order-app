/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('MANAGER', 'ADMIN');

-- DropTable
DROP TABLE "Admin";

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "userRole" NOT NULL DEFAULT 'MANAGER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);
