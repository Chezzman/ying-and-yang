var Restaurant = {
  controller: {
    index: function () {
      var $content = $('#content');

      Restaurant.model.index(
        function success(data) {
          var indexHtml = Restaurant.view.index(data);

          // set the HTML in the content div
          $content.html(indexHtml);
        },
        function error(err) {
          $('#error-message').html(err.responseJSON.message);

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

      var $content = $('#content');

      Restaurant.model.new(
           function success() {
             var newHtml = Restaurant.view.new();
             $content.html(newHtml);

           },
           function error(err) {
             $('#error-message').html(err.responseJSON.message);

           }
         );

    },


    show: function () {
      // TODO: implement
    },
    edit: function (restaurantId) {
      var $content = $('#content');

      Restaurant.model.show(
        restaurantId,
        function success(data) {
          var showHtml = Restaurant.view.edit(data);

          // set the HTML in the content div
          $content.html(showHtml);
        },
        function error(err) {
          $('#error-message').html(err.responseJSON.message);
        }
      );
    },
    update: function (form) {
      var updatedRestaurant = {
        id: form.restaurantId.value,
        name: form.name.value,
        location: form.location.value,
        cuisineStyle: form.cuisineStyle.value
      };

      Restaurant.model.update(
        updatedRestaurant,
        function success() {
          Restaurant.controller.index();
        },
        function error(err) {
          console.log('ERROR: err:', err);
          $('#error-message').html(err.responseJSON.message);
        }
      );
    },
    destroy: function (restaurantId) {
      Restaurant.model.destroy(
        restaurantId,
        function success() {
          Restaurant.controller.index();
        },
        function error(err) {
          $('#error-message').html(err.responseJSON.message);
        }
      );
    }
  },

  view: {
    index: function (restaurants) {
      var html = `
        <h1>Restaurants</h1>
        <ul>
      `;

      for(var i = 0; i < restaurants.length; i++) {
        html += `
        <li>
          <a href="/${restaurants[i]._id}">${restaurants[i].name}</a>
          <button onclick="Restaurant.controller.destroy('${restaurants[i]._id}')">delete</button>
          <button onclick="Restaurant.controller.edit('${restaurants[i]._id}')">edit</button>
        </li>`;
      }
      html += `</ul>`;
      html += `<button onclick="Restaurant.controller.new()">Add Restaurant</button>`;

      return html;
    },
    edit: function (restaurant) {
      var html =

      `<h1>Edit Restaurant</h1>
       <div id="addForm">
          <form name"editRestaurant">
          <label for="nameRes">Name</label>
            <input id="nameRes" name="Name" value"${restaurant.name}" placeholder="Restaurant Name">

          <label for="location">Location</location>
            <input id="location" name="Location" value"${restaurant.location}" placeholder="Post Code">

          <label for="cuisine">Cuisine</location>
            <input  id="cuisine" name="Cuisine" value"${restaurant.cuisineStyle}" placeholder="Cuisine Style">

            <button onclick="Restaurant.controller.update(editRestaurant)">Edit</button>
          </form>
          <button onclick="Restaurant.controller.index()" >Cancel</button>
        </div>`;

      return html;

    },

    new: function () {
      var html =

       `<h1>Add Restaurant</h1>
        <div id="addForm">
           <form action="/restaurants" method="POST">
             <input type="text" name="name" placeholder="Restaurant Name">
             <input type="text" name="location" placeholder="Post Code">
             <input type="text" name="cuisineStyle" placeholder="Cuisine Style">
             <input type="hidden" name="RestaurantId" value="<%=  %>">
             <button onclick="Restaurant.controller.create()">Add</button>
           </form>
           <button onclick="Restaurant.controller.index()">Cancel</button>
         </div>`;

      return html;
    }

  },
  model: {
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
