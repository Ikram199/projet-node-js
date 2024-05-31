const express = require('express');
const router = express.Router();

// Exemple de route pour les utilisateurs
router.get('/', (req, res) => {
  res.send('Liste des utilisateurs');
});

module.exports = router;
