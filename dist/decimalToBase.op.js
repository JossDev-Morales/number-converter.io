"use strict";

/**
 * Convert a number in decimal base to a some other base betwen 2 and 36 under the rules for bases, see at https://github.com/JossDev-Morales/Number-converter.io/#number-base-rules
 * @param {string} decimal The number representation 
 * @param {'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'} radix The base to convert, betwen 1 and 36
 * @see https://github.com/JossDev-Morales/Number-converter.io/#decimaltobase decimalToBase Doc
 * @returns {string} The representation of the number converted to the numeric base
 */
function decimalToBase(decimal, radix) {
  let number = BigInt(decimal);
  let bigRadix = BigInt(radix);
  let result = "";
  while (number > 0n) {
    let remainder = number % bigRadix;
    if (remainder >= 10n) {
      result = String.fromCharCode(65 + Number(remainder.toString()) - 10) + result;
    } else {
      result = remainder.toString() + result;
    }
    number = number / bigRadix; // Realizamos la división sin redondeo
  }

  return result || "0";
}
module.exports = decimalToBase;