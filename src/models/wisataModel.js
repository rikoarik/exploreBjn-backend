
module.exports = {
  addWisata: (wisata) => {
    wisataData.push(wisata);
  },

  findWisataByName: (name) => wisataData.find((wisata) => wisata.Wisata === name),

  getAllWisata: () => wisataData,

  updateWisata: (No, updatedData) => {
    const wisataIndex = wisataData.findIndex((wisata) => wisata.No === No);
    if (wisataIndex !== -1) {
      wisataData[wisataIndex] = { ...wisataData[wisataIndex], ...updatedData };
      return wisataData[wisataIndex];
    }
  },

  deleteWisata: (No) => {
    const wisataIndex = wisataData.findIndex((wisata) => wisata.No === No);
    if (wisataIndex !== -1) {
      const deletedWisata = wisataData.splice(wisataIndex, 1);
    }
  },
};

