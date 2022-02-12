-- CreateTable
CREATE TABLE `reading_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(100) NULL,
    `date_added` DATE NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `image` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `url`(`url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
