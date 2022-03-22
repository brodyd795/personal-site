/*
  Warnings:

  - Made the column `url` on table `reading_list` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `reading_list` MODIFY `url` VARCHAR(100) NOT NULL;
