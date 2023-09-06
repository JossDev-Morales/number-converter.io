"use strict";

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
const baseChecker = require("./baseChecker.tool");
const baseToDecimal = require("./baseToDecimal.op");
const decimalToBase = require("./decimalToBase.op");
const sanitizer = require("./sanitizer.tool");
/**
 * @class Converter is a class to parse a number and convert it to other number bases such as Binary, Octal, Decimal, Hexadecimal and custom bases between 2 and 36.
 * @public
 * @see https://github.com/JossDev-Morales/Number-converter.io/ Documentation
 */
var _number = /*#__PURE__*/new WeakMap();
var _base = /*#__PURE__*/new WeakMap();
class converter {
  /**
   * @constructor A converter betwen numeric bases, under the rules for the bases, see at https://github.com/JossDev-Morales/Number-converter.io/#number-base-rules
   * @param {string} number A number representation in some numeric base
   * @param {("binary"|"octal"|"decimal"|"hexadecimal"|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36')} base A numeric base betwen 2 and 36
   * @see https://github.com/JossDev-Morales/Number-converter.io/ Documentation
   */
  constructor(number, base) {
    _classPrivateFieldInitSpec(this, _number, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _base, {
      writable: true,
      value: void 0
    });
    this.composition = sanitizer(String(number), base);
    _classPrivateFieldSet(this, _number, this.composition.number);
    _classPrivateFieldSet(this, _base, this.composition.base);
    //checker
    baseChecker(_classPrivateFieldGet(this, _number), this.composition.base);
  }
  /**
   * @method toBinary This method converts the current number to binary base.
   * @see https://github.com/JossDev-Morales/Number-converter.io/#tobinary
   * @returns {string} The numeric representation in Binary
   */
  toBinary() {
    if (!_classPrivateFieldGet(this, _number).decimals) {
      return this.composition.sign === '-' ? this.composition.sign : '' + decimalToBase(this.toDecimal(), '2');
    } else {
      return "".concat(this.composition.sign === '-' ? this.composition.sign : '').concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).ints, _classPrivateFieldGet(this, _base)), '2'), ".").concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).decimals, _classPrivateFieldGet(this, _base)), '2'));
    }
  }
  /**
   * @method toOctal This method converts the current number to octal base.
   * @see https://github.com/JossDev-Morales/Number-converter.io/#tooctal
   * @returns {string} The numeric representation in Octal
   */
  toOctal() {
    if (!_classPrivateFieldGet(this, _number).decimals) {
      return this.composition.sign === '-' ? this.composition.sign : '' + decimalToBase(this.toDecimal(), '8');
    } else {
      return "".concat(this.composition.sign === '-' ? this.composition.sign : '').concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).ints, _classPrivateFieldGet(this, _base)), '8'), ".").concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).decimals, _classPrivateFieldGet(this, _base)), '8'));
    }
  }
  /**
   * @method toDecimal This method converts the current number to decimal base.
   * @see https://github.com/JossDev-Morales/Number-converter.io/#todecimal
   * @returns {string} The numeric representation in Decimal
   */
  toDecimal() {
    if (!_classPrivateFieldGet(this, _number).decimals) {
      return this.composition.sign === '-' ? this.composition.sign : '' + baseToDecimal(_classPrivateFieldGet(this, _number).ints, _classPrivateFieldGet(this, _base));
    } else {
      return "".concat(this.composition.sign === '-' ? this.composition.sign : '').concat(baseToDecimal(_classPrivateFieldGet(this, _number).ints, _classPrivateFieldGet(this, _base)), ".").concat(baseToDecimal(_classPrivateFieldGet(this, _number).decimals, _classPrivateFieldGet(this, _base)));
    }
  }
  /**
   * @method toHexadecimal This method converts the current number to hexadecimal base.
   * @see https://github.com/JossDev-Morales/Number-converter.io/#tohexadecimal
   * @returns {string} The numeric representation in Hexadecimal
   */
  toHexadecimal() {
    if (!_classPrivateFieldGet(this, _number).decimals) {
      return this.composition.sign === '-' ? this.composition.sign : '' + decimalToBase(this.toDecimal(), '16');
    } else {
      return "".concat(this.composition.sign === '-' ? this.composition.sign : '').concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).ints, _classPrivateFieldGet(this, _base)), '16'), ".").concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).decimals, _classPrivateFieldGet(this, _base)), '16'));
    }
  }
  /**
   * @method toCustomBase This method converts the current number to other base under the rules for the bases, see at https://github.com/JossDev-Morales/Number-converter.io/#number-base-rules
   * @see https://github.com/JossDev-Morales/Number-converter.io/#tocustombase toCustomBase Doc
   * @param {string} base The custom base to convert 
   * @returns {string} The numeric representation of the custom base.
   */
  toCustomBase(base) {
    let radix;
    if (base === 'binary') {
      radix = '2';
    } else if (base === 'octal') {
      radix = '8';
    } else if (base === 'decimal') {
      radix = '10';
    } else if (base === 'hexadecimal') {
      radix = '16';
    } else {
      radix = base;
    }
    if (!_classPrivateFieldGet(this, _number).decimals) {
      return this.composition.sign === '-' ? this.composition.sign : '' + decimalToBase(this.toDecimal(), radix);
    } else {
      return "".concat(this.composition.sign === '-' ? this.composition.sign : '').concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).ints, _classPrivateFieldGet(this, _base)), radix), ".").concat(decimalToBase(baseToDecimal(_classPrivateFieldGet(this, _number).decimals, _classPrivateFieldGet(this, _base)), radix));
    }
  }
  /**
   * @method fromCustomToCustom An static method to convert from a number in some base to other base under the rules for the bases, see at https://github.com/JossDev-Morales/Number-converter.io/#number-base-rules
   * @see https://github.com/JossDev-Morales/Number-converter.io/#static-methods fromCustomToCustom Doc
   * @param {{number:string,base:string}} from The representation of an number in a custom base
   * @param {string} to The custom base to convert
   */
  static fromCustomToCustom(from, to) {
    const fromNumber = sanitizer(from.number, from.base);
    if (!fromNumber.number.decimals) {
      const decimal = baseToDecimal(fromNumber.number.ints, from.base);
      return fromNumber.sign === '-' ? fromNumber.sign : '' + decimalToBase(decimal, to);
    } else {
      return "".concat(fromNumber.sign === '-' ? fromNumber.sign : '').concat(decimalToBase(baseToDecimal(fromNumber.number.ints, from.base), to), ".").concat(decimalToBase(baseToDecimal(fromNumber.number.decimals, from.base), to));
    }
  }
}
module.exports = converter;