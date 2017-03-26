// define a globally-available object, which stores all functions related to a Restaurants
// Note: this is a singleton, so we are following the convention of giving a singleton an init capital letter.
var Restaurant = {
  controller: {
    index: function () {
      var $content = $('#content');

      Restaurant.model.index(
        function success(data) {
          var indexHtml = Restaurant.view.index(data);

          // set the HTML in the content div
          $content.html(indexHtml);
          var $addRestaurant = $('#addRestaurant');

          $addRestaurant.click(function(){
            Restaurant.controller.new();
          });

        },
        function error() {
          // TODO: what will you do when an error occurs?
          // Display a message somewhere?
          // What parameters are passed to this anonymous function?
          //   - read the jQuery docs
          //   - use console.log() to confirm
          // See: https://api.jquery.com/jQuery.ajax/
        }
      );
    },

    new: function () {
      // TODO: implement
      var $content = $('#content');

      Restaurant.model.new(
        function success() {
          var newHtml = Restaurant.view.new();
          $content.html(newHtml);
          var $backToIndex = $('#backToIndex');
          $backToIndex.click(function(){
            Restaurant.controller.index();
          });
        },
        function error() {
          // TODO: what will you do when an error occurs?
          // Display a message somewhere?
          // What parameters are passed to this anonymous function?
          //   - read the jQuery docs
          //   - use console.log() to confirm
          // See: https://api.jquery.com/jQuery.ajax/
        }
      );

    },

    show: function () {
      // TODO: implement
    },

    edit: function () {
      // TODO: implement
    },
    destroy: function () {
      // TODO: implement
    }
  },
  // the following object contains methods related to generating the View - ie, the HTML:
  view: {
    // this maps directly to the `index` route (remember the 7 RESTful routes?)
    index: function (restaurants) {
      var html = `
        <h1>Restaurants</h1>
        <ul>
      `;

      for(var i = 0; i < restaurants.length ; i++) {
        // TODO: fill this in properly!
        // For example:
        //   - add buttons to view, edit & delete this restaurant
        //   - on each button, you can add an `onclick` attribute that calls the relevant method on `Restaurants.controller`
        html += `<a href="/"><li>${restaurants[i].name}</li></a>`;
      }
      html += `</ul>`;
      html += `<button id="addRestaurant">Add Restaurant</button>`;

      return html;
    },
    // generate the HTML to edit an existing Restaurants
    edit: function () {
      // TODO: implement
    },

    new: function () {
      var html =

      `<h1>Add Restaurant</h1>
       <div id="addForm">
          <form action="/books" method="POST">
            <input type="text" name="Name" placeholder="Restaurant Name">
            <input type="text" name="Location" placeholder="Post Code">
            <input type="text" name="Cuisine" placeholder="Cuisine Style">
            <input type="hidden" name="userId" value="<%= book.user %>">
            <button>Add</button>
          </form>
          <button id="backToIndex">Cancel</button>
        </div>`;

      return html;
    }
  },

  // the following object contains model-related methods
  // ie AJAX calls to implement the relevant RESTful methods:
  model: {
    // this maps to the `index` route
    // see jQuery docs for `success` and `error` callbacks:
    //  https://api.jquery.com/jQuery.ajax/
    index: function (success, error) {
      $.ajax({
        method: 'GET',
        dataType: 'json',
        url: '/restaurants',
        success: success,
        error: error
      });
    },
    new: function (success, error) {
      $.ajax({
        method: 'GET',
        dataType: 'json',
        url: '/restaurants/new',
        success: success,
        error: error
      });
    },
    show: function (id, success, error) {
      $.ajax({
        method: 'GET',
        dataType: 'json',
        url: `/restaurants/${id}`,
        success: success,
        error: error
      });
    },
    create: function (data, success, error) {
      $.ajax({
        method: 'POST',
        dataType: 'json',
        url: '/restaurants',
        data: data,
        success: success,
        error: error
      });
    },
    update: function (data, success, error) {
      $.ajax({
        method: 'PUT',
        dataType: 'json',
        url: `/restaurants/${data.id}`,
        data: data,
        success: success,
        error: error
      });
    },
    destroy: function (id, success, error) {
      $.ajax({
        method: 'DELETE',
        url: `/restaurants/${id}`,
        success: success,
        error: error
      });
    }
  }
};

module.exports = Restaurant;
