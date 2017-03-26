// define a globally-available object, which stores all functions related to a Game
// TODO: use the Game object as an example of how to implement it.

// define a globally-available object, which stores all functions related to a Foods
// Note: this is a singleton, so we are following the convention of giving a singleton an init capital letter.
var Food = {
  controller: {
    create: function () {
      // TODO: implement
    }
  },
  // the following object contains methods related to generating the View - ie, the HTML:
  view: {
    // this maps directly to the `index` route (remember the 7 RESTful routes?)
    // generate the HTML to create a new Foods
    // generate the HTML to edit an existing Foods
    new: function (foods) {
      // TODO: implement
    }
  },
  // the following object contains model-related methods
  // ie AJAX calls to implement the relevant RESTful methods:
  model: {
    // this maps to the `index` route
    // see jQuery docs for `success` and `error` callbacks:
    //  https://api.jquery.com/jQuery.ajax/

    create: function (data, success, error) {
      $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/foods',
        data: data,
        success: success,
        error: error
      });
    }
  }
};
