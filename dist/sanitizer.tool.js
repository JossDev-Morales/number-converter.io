"use strict";

const baseFinder = require("./baseFinder.tool");
parseInt();
/**
 * 
 * @param {string} number 
 * @param {("binary"|"octal"|"decimal"|"hexadecimal"|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36')} radix 
 * @returns {{base:string,sign:string,number:{ints:string,decimals:string}}}
 */
function sanitizer(number, radix) {
  let base = baseFinder(number, radix);
  if (base === 'binary' || base === '2') {
    if (number[0] === '-') {
      if (number[1] === '0' && number[2] === 'b' || number[1] === '0' && number[2] === 'B') {
        const binary = number[2] === 'b' ? number.split('b') : number.split('B');
        return {
          base: '2',
          sign: binary[0][0],
          number: {
            ints: binary[1].split('.')[0],
            decimals: binary[1].split('.')[1]
          }
        };
      } else {
        const binary = [number[0], number.split('').slice(1)];
        return {
          base: '2',
          sign: binary[0],
          number: {
            ints: binary[1].join('').split('.')[0],
            decimals: binary[1].join('').split('.')[1]
          }
        };
      }
    } else if (number[0] === '0' && number[1] === 'b' || number[0] === '0' && number[1] === 'B') {
      const binary = number[1] === 'b' ? number.split('b') : number.split('B');
      return {
        base: '2',
        sign: '+',
        number: {
          ints: binary[1].split('.')[0],
          decimals: binary[1].split('.')[1]
        }
      };
    } else {
      const binary = ['+', number];
      return {
        base: '2',
        sign: binary[0],
        number: {
          ints: binary[1].split('.')[0],
          decimals: binary[1].split('.')[1]
        }
      };
    }
  } else if (base === 'octal' || base === '8') {
    if (number[0] === '-') {
      if (number[1] === '0' && number[2] === 'o' || number[1] === '0' && number[2] === 'O') {
        const octal = number[2] === 'o' ? number.split('o') : number.split('O');
        return {
          base: '8',
          sign: octal[0][0],
          number: {
            ints: octal[1].split('.')[0],
            decimals: octal[1].split('.')[1]
          }
        };
      } else {
        const octal = [number[0], number.slice(1)];
        return {
          base: '8',
          sign: octal[0],
          number: {
            ints: octal[1].split('.')[0],
            decimals: octal[1].split('.')[1]
          }
        };
      }
    } else if (number[0] === '0' && number[1] === 'o' || number[0] === '0' && number[1] === 'O') {
      const octal = number[1] === 'o' ? number.split('o') : number.split('O');
      return {
        base: '8',
        sign: '+',
        number: {
          ints: octal[1].split('.')[0],
          decimals: octal[1].split('.')[1]
        }
      };
    } else {
      const octal = ['+', number];
      return {
        base: '8',
        sign: octal[0],
        number: {
          ints: octal[1].split('.')[0],
          decimals: octal[1].split('.')[1]
        }
      };
    }
  } else if (base === 'decimal' || base === '10') {
    if (number[0] === '-') {
      if (number[1] === '0' && number[2] === 'd' || number[1] === '0' && number[2] === 'D') {
        const decimal = number[2] === 'd' ? number.split('d') : number.split('D');
        return {
          base: '10',
          sign: decimal[0][0],
          number: {
            ints: decimal[1].slice(1).split('.')[0],
            decimals: decimal[1].slice(1).split('.')[1]
          }
        };
      } else {
        return {
          base: '10',
          sign: number[0],
          number: {
            ints: number.slice(1).split('.')[0],
            decimals: number.slice(1).split('.')[1]
          }
        };
      }
    } else if (number[0] === '0' && number[1] === 'd' || number[0] === '0' && number[1] === 'D') {
      const decimal = number[1] === 'd' ? number.split('d') : number.split('D');
      return {
        base: '10',
        sign: '+',
        number: {
          ints: decimal[1].split('.')[0],
          decimals: decimal[1].split('.')[1]
        }
      };
    } else {
      return {
        base: '10',
        sign: '+',
        number: {
          ints: number.split('.')[0],
          decimals: number.split('.')[1]
        }
      };
    }
  } else if (base === 'hexadecimal' || base === '16') {
    if (number[0] === '-') {
      if (number[1] === '0' && number[2] === 'x' || number[1] === '0' && number[2] === 'X') {
        const hexadecimal = number[2] === 'x' ? number.split('x') : number.split('X');
        return {
          base: '16',
          sign: hexadecimal[0][0],
          number: {
            ints: hexadecimal[1].split('.')[0],
            decimals: hexadecimal[1].split('.')[1]
          }
        };
      } else {
        const hexadecimal = [number[0], number.slice(1)];
        return {
          base: '16',
          sign: hexadecimal[0],
          number: {
            ints: hexadecimal[1].split('.')[0],
            decimals: hexadecimal[1].split('.')[1]
          }
        };
      }
    } else if (number[0] === '0' && number[1] === 'x' || number[0] === '0' && number[1] === 'X') {
      const hexadecimal = number[1] === 'x' ? number.split('x') : number.split('X');
      return {
        base: '16',
        sign: '+',
        number: {
          ints: hexadecimal[1].split('.')[0],
          decimals: hexadecimal[1].split('.')[1]
        }
      };
    } else {
      const hexadecimal = ['+', number];
      return {
        base: '16',
        sign: hexadecimal[0],
        number: {
          ints: hexadecimal[1].split('.')[0],
          decimals: hexadecimal[1].split('.')[1]
        }
      };
    }
  } else {
    if (number[0] === '-') {
      const customNumber = [number[0], number.slice(1)];
      return {
        base: base,
        sign: customNumber[0],
        number: {
          ints: customNumber[1].split('.')[0],
          decimals: customNumber[1].split('.')[1]
        }
      };
    } else {
      return {
        base: base,
        sign: '+',
        number: {
          ints: number.split('.')[0],
          decimals: number.split('.')[1]
        }
      };
    }
  }
}
module.exports = sanitizer;