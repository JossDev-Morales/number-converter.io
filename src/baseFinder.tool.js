const customError = require("./customError.error");
/**
 * 
 * @param {string} number The recived number representatation
 * @param {"binary"|"octal"|"decimal"|"hexadecimal"|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'} radix The recived base of the number
 * @returns {string} The base of the number
 * @throws {customError} If an error with the marks acords to the numeric base exist
 */
function baseFinder(number, radix) {
    let base

    let sign = number[0] === '-' ? 1 : 0
    if (!radix) {
        if (number[sign] === '0' && isNaN(number[sign + 1])) {
            if (number[sign + 1] === 'b' || number[sign + 1] === 'B') {
                base = '2'
            } else if (number[sign + 1] === 'o' || number[sign + 1] === 'O') {
                base = '8'
            } else if (number[sign + 1] === 'd' || number[sign + 1] === 'D') {

            } else if (number[sign + 1] === 'x' || number[sign + 1] === 'X') {
                base = '16'
            } else {
                let InvalidNumber = new customError('numberMarkError', 'Invalid mark at the number mark, we can not read a valid mark', {
                    validMarks: ['0b', '0B', '0o', '0O', '0d', '0D', '0x', '0X'],
                    invalidMark: number[sign] + number[sign + 1]
                })
                throw InvalidNumber
            }
        } else {
            const baseError = new customError('baseError', 'If the base is not present, you must use a mark in the representation of your number', {
                example: '"0b"10110'
            })
            throw baseError
        }
    } else {
        base = radix
        if (number[sign] === '0' && isNaN(number[sign + 1])) {
            let mark = number[sign] + number[sign + 1]
            let InvalidMark = new customError('numberMarkError', `La base numerica del numero es ${radix} y ${number[sign] + number[sign + 1]} no es una marka valida para esta base`, {
                validMarks: base === 'binary' || base === '2' ? ['0b', '0B'] : base === 'octal' || base === '8' ? ['0o', '0O'] : base === 'decimal' || base === '10' ? ['0d', '0D'] : ['0x', '0X'],
                invalidMark: number[sign] + number[sign + 1]
            })
            if (base === 'binary' || base === '2') {
                if (mark !== '0b' && mark !== '0B') {
                    throw InvalidMark
                }
            } else if (base === 'octal' || base === '8') {
                if (mark !== '0o' && mark !== '0O') {
                    throw InvalidMark
                }
            } else if (base === 'decimal' || base === '10') {
                if (mark !== '0d' && mark !== '0D') {
                    throw InvalidMark
                }
            } else if (base === 'hexadecimal' || base === '16') {
                if (mark !== '0x' && mark !== '0X') {
                    throw InvalidMark
                }
            }
        }
    }
    if (base) {
        return base
    } else throw new customError('BaseError', 'Base can not be undefined')
}
module.exports = baseFinder