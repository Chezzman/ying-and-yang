var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var request;

chai.should();
chai.use(chaiHttp);

describe('Restaurants', function () {
  beforeEach(function () {
    request = chai.request(app);
  });


  });
