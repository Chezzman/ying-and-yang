var Restaurant = require('../models/restaurant-model');

require('../models/food-model');

// Action: index
function indexRestaurants(req, res) {
  Restaurant.find({}, function (err, restaurants) {
    if (err) {
      console.log('Could not get list of restaurants:', err.message);
      // A little bit lazy, but not going to implement
      // anything more complex at this point in time:
      res.status(500).json({ message: 'Could not get list of restaurants' });
      return;
    }
    res.json(restaurants);
  });
}

// Action: update
function updateRestaurant(req, res) {
  var restaurantId = req.params.id;
  var updatedRestaurant = {
    name: req.body.name,
    location: req.body.location,
    cuisineStyle: req.body.cuisineStyle
  };

  Restaurant.findOneAndUpdate({ _id: restaurantId }, updatedRestaurant, function (err) {
    if (err) {
      console.log('Could not get existing restaurant to update:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).json({ message: 'Could not get existing restaurant to update' });
      return;
    }
    res.status(200).json(updatedRestaurant);
  });
}

// Action: show
function showRestaurant(req, res) {
  var restaurantId = req.params.id;

  Restaurant.findOne({ _id: restaurantId }).populate('foods').exec(
    function (err, restaurant) {
      if (err) {
        console.log('Could not get restaurant:', err.message);
        // ditto comment above re. keeping complexity to a minimum:
        res.status(404).json({ message: 'Could not get restaurant' });
        return;
      }
      res.status(200).json(restaurant);
    }
  );
}

function createRestaurant(req, res) {
  var newRestaurant = new Restaurant();

  newRestaurant.name = req.body.name;
  newRestaurant.location = req.body.location;
  newRestaurant.cuisineStyle = req.body.cuisineStyle;

  newRestaurant.save(function (err) {
    if (err) {
      res.status(404).json({ message: 'Could not add restaurant'});
      return;
    }
    res.json({ message: 'Restaurant successfully created'});
  });
}

// Action: destroy
function destroyRestaurant(req, res) {
  var restaurantId = req.params.id;

  Restaurant.deleteOne({ _id: restaurantId }, function (err) {
    if (err) {
      console.log('Could not get restaurant to delete:', err.message);
      res.status(404).json({ message: 'Could not get restaurant to delete' });
      return;
    }
    res.status(200).json({ message: 'Restaurant successfully deleted' });
  });
}

module.exports = {
  index: indexRestaurants,
  update: updateRestaurant,
  create: createRestaurant,
  show: showRestaurant,
  destroy: destroyRestaurant
};
