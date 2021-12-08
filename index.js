'use strict'

module.exports = class Temperature {
  constructor (value, scale) {
    this.value = value;
    this.scale = scale.toUpperCase();
  }

  toFahrenheit() {
    if (this.scale === 'f'.toUpperCase()) throw new Error('Can not convert a temperature to it\'s same scale');

    return this.value * 9/5 + 32;
  }
}
