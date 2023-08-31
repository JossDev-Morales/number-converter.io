const customError = require("./customError.error")

function baseChecker(number, radix) {
    if (!['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21',
        '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', 'binary', 'octal', 'decimal',
        'hexadecimal'].some(allowedBase => allowedBase === radix)) {
        const baseError = new customError('baseError', 'Not allowed base, use some of the next bases', {
            allowedBases: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21',
                '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', 'binary', 'octal', 'decimal',
                'hexadecimal'],
            currentBase: radix
        })
        throw baseError
    }
    if (!number.decimals) {
        if (radix < 10 && number.ints.split('').some(digit => {
            if (digit !== '.' && isNaN(digit)) {
                return true
            } else return false
        })) {
            const numberError = new customError('numberError', 'Numbers with NaN digits in bases less than 10 such as decimal, octal and binary are not allowed.', {
                currentBase: radix,
                currentNotAllowedNumber: number
            })
            throw numberError
        }
    } else {
        if (radix<10) {
            if (number.ints.split('').some(digit => {
                if (digit !== '.' && isNaN(digit)) {
                    return true
                } else return false
            }) || number.decimals.split('').some(digit => {
                if (digit !== '.' && isNaN(digit)) {
                    return true
                } else return false
            })) {
                const numberError = new customError('numberError', 'Numbers with NaN digits in bases less than 10 such as decimal, octal and binary are not allowed.', {
                    currentBase: radix,
                    currentNotAllowedNumber: number
                })
                throw numberError
            }
        }
    }
}

module.exports = baseChecker