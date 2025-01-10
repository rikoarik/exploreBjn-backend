const express = require('express');
const router = express.Router();
const wisataController = require('../controllers/wisataController');

// Create: Menambahkan wisata
router.post('/createWisata', wisataController.createWisata);

// Read: Mencari wisata berdasarkan nama
router.get('/wisata/:name', wisataController.getWisataByName);

// Read: Mendapatkan semua wisata
router.get('/wisata', wisataController.getAllWisata);


module.exports = router;
