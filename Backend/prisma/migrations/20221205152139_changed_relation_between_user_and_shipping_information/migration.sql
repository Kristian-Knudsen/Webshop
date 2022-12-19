/*
  Warnings:

  - You are about to drop the column `shippingInformationId` on the `user` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ShippingInformation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_shippingInformationId_fkey`;

-- AlterTable
ALTER TABLE `shippinginformation` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `shippingInformationId`;

-- AddForeignKey
ALTER TABLE `ShippingInformation` ADD CONSTRAINT `ShippingInformation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
