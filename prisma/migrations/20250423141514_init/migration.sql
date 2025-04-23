-- CreateTable
CREATE TABLE `times` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clube` VARCHAR(50) NOT NULL,
    `estado` VARCHAR(5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jogadores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `nacionalidade` VARCHAR(50) NOT NULL,
    `timeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jogadores` ADD CONSTRAINT `jogadores_timeId_fkey` FOREIGN KEY (`timeId`) REFERENCES `times`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
