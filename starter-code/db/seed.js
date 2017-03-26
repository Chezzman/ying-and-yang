// TODO: implement seedData()
console.warn('NOTE! This is where you will seed your database.');
console.warn('NOTE! Remember to change Game & Player to your primary & secondary model names... and the comments too!');

var mongoose = require('mongoose');
var Restaurant = require('../models/restaurant-model');
var Food = require('../models/food-model');
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/sg-webdev4-project2';

function seedData() {
  var food1 = new Food();
  var food2 = new Food();
  var restaurant = new Restaurant();
  var menuSaved = [];

  food1.name = 'Krabby Patty';
  food1.course = 'Main';
  food1.price = '$100';
  food2.name = 'Krusty Krab Pizza';
  food2.course = 'Main';
  food2.price = '$50';

  food1.save(function (err, food1Result) {
    if (err) {
      console.log('could not add', food1.name ,'to the menu: err:', err);
      process.exit(1);
    }
    menuSaved.push(food1Result);
    food2.save(function (err, food2Result) {
      if (err) {
        console.log('could not add', food2.name ,'to the menu: err:', err);
        process.exit(1);
      }
      menuSaved.push(food2Result);
      console.log('menuSaved:', menuSaved);
      restaurant.name = 'Krusty Krab';
      restaurant.location = 'Bikini Bottom';
      restaurant.cuisineStyle = 'Underwater American Glory';
      restaurant.menu.push(menuSaved[0]._id);
      restaurant.menu.push(menuSaved[1]._id);
      restaurant.save(function (err, restaurantResult) {
        if (err) {
          console.log('could not create restaurant: err:', err);
          process.exit(1);
        }
        console.log('restaurant saved:', restaurantResult);
        mongoose.connection.close();
      });
    });
  });
}

function initDb() {
  mongoose.connect(MONGODB_URI, {}, function (err) {
    if (err) {
      console.log('could not connect to db: err:', err);
      process.exit(1);
    }
    console.log('connected to', mongoose.connection.name);
    Restaurant.remove({}, function(err) {
      if (err) {
        console.log('could not drop restaurant collection: err:', err);
        process.exit(1);
      }
      console.log('emptied restaurant collection');
      Food.remove({}, function(err) {
        if (err) {
          console.log('could not drop Food collection: err:', err);
          process.exit(1);
        }
        console.log('emptied Food collection');
        seedData();
      });
    });
  });
}

initDb();
