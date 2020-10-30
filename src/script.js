"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
exports.default = exports.Slider = void 0;

function button() {
  return 'button';
}
/*Создание класса  с параметрами и методами

*/


class Slider {
  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
  }

  nextSlide() {
    console.log('move forward');
  }

  prevSlide() {
    console.log('move back');
  }

  whoAmI() {
    console.log(this.height, this.width, this.count);
  }

}

exports.Slider = Slider;
const sider = new Slider(500, 300, 6);
sider.whoAmI();
/* Создание класса расширение существующего ключевое слово extends и  вывов метода super. 
*/

class AutoSlider extends Slider {
  constructor(width, height, count) {
    super(width, height, count);
    this.auto = auto;
  }

  play() {
    console.log("AutoPlay ".concat(this.auto));
  }

}

var _default = Slider; // экспорт класса

exports.default = _default;