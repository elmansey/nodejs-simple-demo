const assert = require('assert');
const app = require('./app');

describe('add function', function() {
  it('should add two numbers correctly', function() {
    assert.equal(app.add(2, 3), 5);
  });

  it('should return NaN for non-numeric input', function() {
    assert(isNaN(app.add('foo', 'bar')));
  });
});