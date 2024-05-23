-- AlterTable
ALTER TABLE `utilisateur` MODIFY `role` ENUM('ADMIN', 'AUTHOR', 'USER') NOT NULL;
