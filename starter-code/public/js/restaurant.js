
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
        html += `<a href="/"><li>${restaurants[i].name}</li></a>`;
        html += `<a href="/"><li>${restaurants[i].course}</li></a>`;
      }
      html += `</ul>`;
      html += `<button id="addRestaurant">Add Restaurant</button>`;

      return html;
    },
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
            <input type="hidden" name="userId" value="<%=  %>">
            <button>Add</button>
          </form>
          <button id="backToIndex">Cancel</button>
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
