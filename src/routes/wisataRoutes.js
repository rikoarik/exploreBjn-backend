const express = require('express');
const router = express.Router();
const wisataController = require('../controllers/wisataController');

// Create: Menambahkan wisata
router.post('/createWisata', wisataController.createWisata);

// Read: Mencari wisata berdasarkan nama
router.get('/wisata/:name', wisataController.getWisataByName);

// Read: Mendapatkan semua wisata
router.get('/wisata', wisataController.getAllWisata);

// Update: Memperbarui data wisata
router.put('/wisata/:No', wisataController.updateWisata);

// Delete: Menghapus wisata
router.delete('/wisata/:No', wisataController.deleteWisata);

module.exports = router;
