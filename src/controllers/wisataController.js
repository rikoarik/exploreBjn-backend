const wisataModel = require('../models/wisataModel');

// Create: Menambahkan wisata baru
const createWisata = (req, res) => {
  const { No, Wisata, Alamat, Latitude, Longitude, ImageUrl, Kategori, Fasilitas, Deskripsi, TipsDanSaran, LainLain } = req.body;

  const newWisata = {
    No,
    Wisata,
    Alamat,
    Latitude,
    Longitude,
    ImageUrl,
    Kategori,
    Fasilitas,
    Deskripsi,
    TipsDanSaran,
    LainLain,
  };

  const addedWisata = wisataModel.addWisata(newWisata);

  res.status(201).json({
    message: 'Wisata berhasil ditambahkan',
    data: addedWisata,
  });
};

// Read: Mencari wisata berdasarkan nama
const getWisataByName = (req, res) => {
  const { name } = req.params;
  const wisata = wisataModel.findWisataByName(name);

  if (wisata) {
    res.status(200).json({
      message: 'Wisata ditemukan',
      data: wisata,
    });
  } else {
    res.status(404).json({
      message: 'Wisata tidak ditemukan',
    });
  }
};

// Read: Mendapatkan semua wisata
const getAllWisata = (req, res) => {
  const allWisata = wisataModel.getAllWisata();
  res.status(200).json({
    message: 'Semua wisata',
    data: allWisata,
  });
};

// Update: Memperbarui data wisata
const updateWisata = (req, res) => {
  const { No } = req.params;
  const updatedData = req.body;

  const updatedWisata = wisataModel.updateWisata(Number(No), updatedData);

  if (updatedWisata) {
    res.status(200).json({
      message: 'Wisata berhasil diperbarui',
      data: updatedWisata,
    });
  } else {
    res.status(404).json({
      message: 'Wisata tidak ditemukan',
    });
  }
};


module.exports = {
  createWisata,
  getWisataByName,
  getAllWisata,
};
