
var TestUtils = {
  getFoodIdFromRestaurantList: function (html) {
    var regExp = /\/foods\/[0-9a-f]+/;
    var result = regExp.exec(html)[0];
    var pathElements = result.split('/');

    return pathElements[2];
  },
  getRestaurantFromList: function (html) {
    var regExp = /\/users\/[0-9a-f]+/;
    var result = regExp.exec(html)[0];
    var pathElements = result.split('/');

    return pathElements[2];
  }
  // generateUniqueString: function (prefix) {
  //   return prefix + Math.random();
  // }
};

module.exports = TestUtils;
