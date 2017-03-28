
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
        }
      );
    },

    new: function () {
      var $content = $('#content');
      var newHtml = Restaurant.view.new();

      $content.html(newHtml);
    },

    create: function (form) {
      var newRestaurant = {
        name: form.name.value,
        location: form.location.value,
        cuisineStyle: form.cuisineStyle.value
      };

      Restaurant.model.create(
        newRestaurant,
        function success() {
          Restaurant.controller.index();
        },
        function error() {

        }
      );

    },

    show: function (restaurantId) {
      Restaurant.model.show(
          restaurantId,
          function success(data) {
            var showHtml = Restaurant.view.show(data);

            $('#content').html(showHtml);
          },
          function error(err) {
            $('#error-message').html(err.responseJSON.message);
          }
        );
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
        function error() {
          //$('#error-message').html(err.responseJSON.message);
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
          //$('#error-message').html(err.responseJSON.message);
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
        <p class="header">Restaurants</p>
        <ul>
      `;

      for(var i = 0; i < restaurants.length; i++) {
        html += `
        <li>
          <a href="#" class="link" onclick="Restaurant.controller.show('${restaurants[i]._id}')">${restaurants[i].name}</a>
          <button class="button" onclick="Restaurant.controller.destroy('${restaurants[i]._id}')">delete</button>
          <button class="button" onclick="Restaurant.controller.edit('${restaurants[i]._id}')">edit</button>
        </li>`;
      }
      html += `</ul>`;
      html += `<button class="button" onclick="Restaurant.controller.new()">Add Restaurant</button>`;

      return html;
    },
    edit: function (restaurant) {
      return `
        <h1 class="header">Edit restaurant</h1>
        <form name="editRestaurant">
          <input type="hidden" name="restaurantId" value="${restaurant._id}">

          <div>
            <label class="header2" for="name">Name</label>
            <input id="name" name="name" value="${restaurant.name}">
          </div>

          <div>
            <label class="header2" for="location">Location</label>
            <input id="location" name="location" value="${restaurant.location}">
          </div>

          <div>
            <label class="header2" for="cuisineStyle">Cuisine style</label>
            <input id="cuisineStyle" name="cuisineStyle" value="${restaurant.cuisineStyle}">
          </div>

          <button class="button" onclick="Restaurant.controller.update(editRestaurant)" type="button">Update</button>
          <button class="button" onclick="Restaurant.controller.index()" type="button">Cancel</button>
        </form>
      `;
    },

    new: function () {
      var newHtml = `
      <h1 class="header">Add Restaurant</h1>
      <form name="addRestaurant">

        <div>
          <label class="header2" for="name">Name</label>
          <input id="name" name="name" placeholder="Restaurant Name">
        </div>

        <div>
          <label class="header2" for="location">Location</label>
          <input id="location" name="location" placeholder="locaion">
        </div>

        <div>
          <label class="header2" for="cuisineStyle">Cuisine style</label>
          <input id="cuisineStyle" name="cuisineStyle" placeholder="Cuisine Style">
        </div>

        <button class="button" onclick="Restaurant.controller.create(addRestaurant)" type="button">Add</button>
        <button class="button" onclick="Restaurant.controller.index()" type="button">Cancel</button>

      `;

      return newHtml;
    },

    show: function(restaurant) {
      var html = `
        <p class="header">Show Restaurant</h2>

        <p><strong>Name:</strong> ${restaurant.name}</p>
        <p><strong>Location:</strong> ${restaurant.location}</p>
        <p><strong>Cuisine Style:</strong> ${restaurant.cuisineStyle}</p>

        <p class="header"><strong>Menu:</strong></p>
        <ul>
      `;

      for (var i = 0; i < restaurant.menu.length; i++) {
        html += `
          <li>
            <em>${restaurant.menu[i].name}<em>
               (${restaurant.menu[i].course} &ndash; ${restaurant.menu[i].price})
          </li>
        `;
      }
      html += `
        <h3 class="header2" >Add Food To MENU</h3>
        <form name="addFood">
          <input type="text" name="name" placeholder="Food Name">
          <input type="text" name="course" placeholder="Course">
          <input type="text" name="price" placeholder="Price">
          <input type="hidden" name="restaurantId" value="${restaurant._id}">
          <button class="button" onclick="Food.controller.create(addFood)" type="button">Add</button>
        </form>
        <button class="button" onclick="Restaurant.controller.index()" type="button">Back</button>
      `;
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
