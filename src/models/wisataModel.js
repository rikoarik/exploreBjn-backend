
module.exports = {
  addWisata: (wisata) => {
    wisataData.push(wisata);
  },

  findWisataByName: (name) => wisataData.find((wisata) => wisata.Wisata === name),

  getAllWisata: () => wisataData,

};

