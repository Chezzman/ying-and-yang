var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurants-controller');
var foodsController = require('../controllers/foods-controller');

// home/ the only page
router.get('/', function(req, res) {
  res.render('../public/html/index.html');
});

// // Restaurants
router.route('/restaurants')
  .get(restaurantsController.index)
  .post(restaurantsController.create);

router.route('/restaurants/:id')
  .put(restaurantsController.update)
  .delete(restaurantsController.delete);

// // Food
router.create('/restaurants/:id/foods', foodsController.create);

module.exports = router;
