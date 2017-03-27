var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurants-controller');


router.get('/restaurants', restaurantsController.index);
router.post('/restaurants', restaurantsController.create);
router.get('/restaurants/:id', restaurantsController.show);
router.put('/restaurants/:id', restaurantsController.update);
router.delete('/restaurants/:id', restaurantsController.destroy);

module.exports = router;
