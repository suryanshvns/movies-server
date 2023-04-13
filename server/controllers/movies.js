const { Movies: MoviesService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await MoviesService.getList();

  return res.send(doc);
};

module.exports = { getList };
