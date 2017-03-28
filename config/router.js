var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurants-controller');
var foodsController = require('../controllers/foods-controller');


router.get('/restaurants', restaurantsController.index);
router.post('/restaurants', restaurantsController.create);
router.get('/restaurants/:id', restaurantsController.show);
router.put('/restaurants/:id', restaurantsController.update);
router.delete('/restaurants/:id', restaurantsController.destroy);

router.post('/foods', foodsController.create);


module.exports = router;
