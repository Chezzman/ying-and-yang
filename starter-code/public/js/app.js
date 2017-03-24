/* global Restaurant, Food */

$(function () {
  console.log('document loaded');
  console.log('Restaurant:', Restaurant);
  console.log('Food:', Food);
  // default screen:
  Restaurant.controller.index();
});
