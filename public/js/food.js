var Food = {
  controller: {
    create: function () {
      // TODO: implement
    }
  },
  view: {
    new: function (foods) {
      // TODO: implement
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
