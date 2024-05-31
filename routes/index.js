const express = require('express');
const router = express.Router();

// Exemple de route d'accueil
router.get('/', (req, res) => {
  res.send('Accueil');
});

module.exports = router;
