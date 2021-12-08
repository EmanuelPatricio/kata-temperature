const { it, expect } = require('@jest/globals');
const Temperature = require('./index');

describe('Temperature', () => {
  const temperature = new Temperature(5.48, 'C');

  it('toFahrenheit() must return a temperature converted to Fahrenheit', () => {
    expect(temperature.toFahrenheit()).toBe(41.864000000000004);
  });
});
