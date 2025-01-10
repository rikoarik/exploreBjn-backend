const express = require('express');
const router = express.Router();
const wisataController = require('../controllers/wisataController');

// Create: Menambahkan wisata
router.post('/createWisata', wisataController.createWisata);

// Read: Mencari wisata berdasarkan nama
router.get('/wisata/:name', wisataController.getWisataByName);

module.exports = router;
