const { getList} = require('../controllers/movies');

module.exports = (router) => {
  router.get('/movies', getList);
};