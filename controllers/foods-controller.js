var Food = require('../models/food-model');

var Restaurant = require('../models/restaurant-model');

function createFood(req, res) {

  var newFood = new Food();

  var restaurantId = req.body.restaurantId;

  newFood.name = req.body.name;
  newFood.course = req.body.course;
  newFood.price = req.body.price;

  newFood.save(function (err, savedFood) {
    if (err) {
      res.status(404).json({ message: 'Could not add food to the menu'});
      return;
    }
    Restaurant.findOne({ _id: restaurantId }, function(err, restaurant) {
      if(err){
        console.log('Could not find restaurant');
      }
      restaurant.menu.push(savedFood._id);

      restaurant.save(function (err) {
        if(err){
          console.log('Could not update restaurant with new food: error:');
        }
        res.json({ message: 'Food successfully added to restaurant'});
      });
    });


  });
}

module.exports = {
  create: createFood
};
