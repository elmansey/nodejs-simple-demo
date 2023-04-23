const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('./app');

describe('GET /', function() {
    it('should respond with "Hello, world!"', function(done) {
      var server = app.listen(3000, function() {
        request(server)
          .get('/')
          .expect(200)
          .expect("Hello, world!", done);
      });
      server.close()
    });
  });