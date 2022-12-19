/*
  Warnings:

  - You are about to drop the column `orderId` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_orderId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `orderId`;
