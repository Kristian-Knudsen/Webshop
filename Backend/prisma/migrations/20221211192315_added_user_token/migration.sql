/*
  Warnings:

  - You are about to drop the column `productId` on the `order` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `orderId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `token` VARCHAR(191) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
