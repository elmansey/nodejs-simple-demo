const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('./app');

describe('GET /', function() {
  it('should respond with "Hello, world!"', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });
});
