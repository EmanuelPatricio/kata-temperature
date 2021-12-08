const { it, expect } = require('@jest/globals');
const Temperature = require('./index');

describe('Temperature', () => {
  const temperature = new Temperature(5.48, 'c');

  it('toFahrenheit() must return a new temperature converted to Fahrenheit', () => {
    expect(temperature.toFahrenheit()).toEqual({"value": 41.864, "scale": 'F'});
  });

  it('toKelvin() must return a temperature converted to Kelvin', () => {
    expect(temperature.toKelvin()).toEqual({"value": 278.63, "scale": 'K'});
  });
});
