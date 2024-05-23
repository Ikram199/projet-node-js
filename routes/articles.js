// const express = require('express');
// const router = express.Router();

// // Importer Prisma client
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // Récupérer des articles
// router.get('/', async (req, res) => {
//     const { take = 10, skip = 0 } = req.query;
//     const articles = await prisma.article.findMany({
//         take: parseInt(take),
//         skip: parseInt(skip),
//     });
//     res.json(articles);
// });

// // Récupérer un article par ID
// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const article = await prisma.article.findUnique({
//         where: { id: parseInt(id) },
//     });
//     res.json(article);
// });

// // Ajouter un nouvel article
// router.post('/', async (req, res) => {
//     const { titre, contenu, image, published } = req.body;
//     const article = await prisma.article.create({
//         data: { titre, contenu, image, published },
//     });
//     res.json(article);
// });

// // Mettre à jour un article
// router.patch('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { titre, contenu, image, published } = req.body;
//     const article = await prisma.article.update({
//         where: { id: parseInt(id) },
//         data: { titre, contenu, image, published },
//     });
//     res.json(article);
// });

// // Supprimer un article
// router.delete('/:id', async (req, res) => {
//     const { id } = req.params;
//     await prisma.article.delete({
//         where: { id: parseInt(id) },
//     });
//     res.json({ message: 'Article supprimé' });
// });

// module.exports = router;
