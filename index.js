'use strict'

module.exports = class Temperature {
  constructor (value, scale) {
    this.value = value;
    this.scale = scale.toUpperCase();
  }

  toFahrenheit() {
    if (this.scale === 'f'.toUpperCase()) throw new Error('Can not convert a temperature to it\'s same scale');

    const temperatureConverter = () => {
      if (this.scale === 'k'.toUpperCase()) {
        return Number(((this.value - 273.15) * 9/5 + 32).toFixed(3));
      }
      return Number((this.value * 9/5 + 32).toFixed(3));
    }
    return new Temperature(temperatureConverter(), 'F');
  }

  toKelvin() {
    if (this.scale === 'k'.toUpperCase()) throw new Error('Can not convert a temperature to it\'s same scale');

    const temperatureConverter = () => {
      if (this.scale === 'f'.toUpperCase()) {
        return Number(((this.value - 32) * 5/9 + 273.15).toFixed(3));
      }
      return Number((this.value + 273.15).toFixed(3));
    }
    return new Temperature(temperatureConverter(), 'K');
  }
}
