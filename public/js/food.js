/* global Restaurant */

var Food = {
  controller: {
    create: function (form) {
      var newFood = {
        name: form.name.value,
        course: form.course.value,
        price: form.price.value,
        restaurantId: form.restaurantId.value
      };

      Food.model.create(
        newFood,
        function success() {
          Restaurant.controller.show(form.restaurantId.value);
        },
        function error() {

        }
      );
    }
  },

  model: {

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
