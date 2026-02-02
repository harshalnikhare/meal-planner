/*
  Warnings:

  - You are about to drop the column `suger` on the `Food` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Food" DROP COLUMN "suger",
ADD COLUMN     "sugar" DOUBLE PRECISION;
