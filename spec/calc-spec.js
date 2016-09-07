var calc = require('../public/js/calculator.js');

describe('multiply', function () {
  it('should return the product', function () {
    var product = calc('7 3 *');
    expect(product).toBe(21);
  })
})
