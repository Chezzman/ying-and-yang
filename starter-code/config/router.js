var express = require('express');
var router = express.Router();
var RestaurantData = require('../models/food-model');

// TODO: fill in your router as required

router.get('/restaurants', function (req, res) {
  RestaurantData.find({}, function (err, restaurants) {
    if (err) {
      console.log('Could not get list of restaurants:', err);
      return;
    }
    res.json([
      {
        name: restaurants[0].name,
        course: restaurants[0].course
      }
    ]);
    console.log('the restaurants', restaurants);
  });
});


router.get('/restaurants/new', function (req, res) {
  // TODO: this is where you'd get your Game data from your database
  // and of course this will be in a separate controller file, as we've done before
  res.json([
    {
      title: 'Crabby Paddies'
    },
    {
      title: 'Bikini bottom'
    },
    {
      title: 'Sea America'
    }
  ]);
});

router.get('/foods/new', function (req, res) {
  // TODO: this is where you'd get your Game data from your database
  // and of course this will be in a separate controller file, as we've done before
  res.json([
    {
      title: 'Crabby Paddies'
    },
    {
      title: 'Bikini bottom'
    },
    {
      title: 'Sea America'
    }
  ]);
});

router.post('/foods', function (req, res) {
  // TODO: this is where you'd get your Game data from your database
  // and of course this will be in a separate controller file, as we've done before
  res.json([
    {
      title: 'Crabby Paddies'
    },
    {
      title: 'Bikini bottom'
    },
    {
      title: 'Sea America'
    }
  ]);
});
//
// router.get('/food', function)

module.exports = router;
