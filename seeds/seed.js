const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
    // Effacez le contenu des tables
    await prisma.commentaire.deleteMany();
    await prisma.article.deleteMany();
    await prisma.categorie.deleteMany();
    await prisma.utilisateur.deleteMany();

    // Créez 10 utilisateurs ayant le rôle “AUTHOR”
    const authors = [];
    for (let i = 0; i < 10; i++) {
        const author = await prisma.utilisateur.create({
            data: {
                nom: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                role: 'AUTHOR'
            }
        });
        authors.push(author);
    }

    // Créez 1 utilisateur ayant le rôle “ADMIN”
    const admin = await prisma.utilisateur.create({
        data: {
            nom: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: 'ADMIN'
        }
    });

    // Créez 10 catégories
    const categories = [];
    for (let i = 0; i < 10; i++) {
        const categorie = await prisma.categorie.create({
            data: {
                nom: faker.commerce.department()
            }
        });
        categories.push(categorie);
    }

    // Créez 100 articles appartenant à (de 1 à 4 catégories aléatoires) et écrits par l’un des 10 auteurs
    for (let i = 0; i < 100; i++) {
        const isPublished = Math.random() < 0.5;
        const article = await prisma.article.create({
            data: {
                titre: faker.lorem.sentence(),
                published: isPublished,
                contenu: faker.lorem.paragraphs(),
                auteurId: authors[Math.floor(Math.random() * authors.length)].id,
                image: faker.image.imageUrl(), // Exemple d'URL d'image aléatoire
                createdAt: new Date(), // Vous pouvez définir la date de création sur la date actuelle
                updatedAt: new Date()
            }
        });
        const commentCount = Math.floor(Math.random() * 21);
        for (let j = 0; j < commentCount; j++) {
            await prisma.commentaire.create({
                data: {
                    contenu: faker.lorem.sentences(),
                    articleId: article.id,
                    email: authors[Math.floor(Math.random() * authors.length)].email // Utiliser l'email de l'auteur comme identifiant
                }
            });
        }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
