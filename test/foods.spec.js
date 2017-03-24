/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var TestUtils = require('./test-utils');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

describe('Foods', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  describe('POST', function () {
    it('should return error when name is blank', function (done) {
      request
          .post('/restaurants')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ name: '', email: 'testpostlastname@example.com' })
          .end(function (err, res) {
            var jsonResponse = JSON.parse(res.text);

            res.should.have.status(400);
            expect(jsonResponse).to.be.an('array');
            expect(jsonResponse.length).to.equal(1);
            expect(jsonResponse[0].path).to.equal('name');
            done();
          });
    });
    it('should return error email is blank', function (done) {
      request
          .post('/restaurants')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ name: 'testPostFirstName', email: '' })
          .end(function (err, res) {
            var jsonResponse = JSON.parse(res.text);

            res.should.have.status(400);
            expect(jsonResponse).to.be.an('array');
            expect(jsonResponse.length).to.equal(1);
            expect(jsonResponse[0].path).to.equal('email');
            done();
          });
    });
    it('should create new user when input data is valid', function (done) {
      var testFirstName = TestUtils.generateUniqueString('first-name');

      //should contain more paths and requests........@@@@@@@@@@@
      request
          .post('/restaurants')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ name: testFirstName, email: 'testpost@example.com' })
          .end(function (err, res) {
            var nameRegExp = new RegExp(testFirstName);

            res.should.have.status(200);
            res.text.should.match(nameRegExp);
            done();
          });
    });
  });

});
