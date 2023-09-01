const customError = require("./customError.error")

function baseChecker(number, radix) {
    //checker weird characters in bases greater than 10 like 11
    if (radix>10) {
        /**@type {string} */
        const digits = !number.decimals ? number.ints : number.ints + number.decimals
        if (digits.split('').some(digit=>{
            if (isNaN(digit)) {
                if (!['A','B',"C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"].includes(digit)) {
                    return true
                }else return false
            }
        })) {
            const invalidCharacter=new customError('invalidCharacter','Your number have some digits that are invalid like "-" or ","',{
                invalidCharacters:digits.split('').filter(digit=>{
                    if (isNaN(digit)) {
                        if (!['A','B',"C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"].includes(digit)) {
                            return true
                        }
                    }
                })
            })
            throw invalidCharacter
        }
    }
    //checker range of bases
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
    //checker binary
    if (radix === 2) {
        /**@type {string} */
        const digits = !number.decimals ? number.ints : number.ints + number.decimals
        if (digits.split('').some(digit => digit !== '0' && digit !== '1')) {
            const invalidBinary = new customError('invalidBinary', 'If a number is from base 2, it cannot have different digits to 0 or 1', {
                invalidDigits: digits.split('').filter(digit => digit !== '0' && digit !== '1'),
                invalidNumber: number.decimals ? number.ints + '.' + number.decimals : number.ints
            })
            throw invalidBinary
        }
    }
    //checker NaN digits in bases less than 11
    if (!number.decimals) {
        if (radix < 11 && number.ints.split('').some(digit => {
            if (digit !== '.' && isNaN(digit)) {
                return true
            } else return false
        })) {
            const numberError = new customError('numberError', 'Numbers with NaN digits in bases less than 11 such as decimal, octal and binary are not allowed.', {
                currentBase: radix,
                currentNotAllowedNumber: number.decimals ? number.ints + '.' + number.decimals : number.ints
            })
            throw numberError
        }
    } else {
        if (radix < 11) {
            if (number.ints.split('').some(digit => {
                if (digit !== '.' && isNaN(digit)) {
                    return true
                } else return false
            }) || number.decimals.split('').some(digit => {
                if (digit !== '.' && isNaN(digit)) {
                    return true
                } else return false
            })) {
                const numberError = new customError('numberError', 'Numbers with NaN digits in bases less than 11 such as decimal, octal and binary are not allowed.', {
                    currentBase: radix,
                    currentNotAllowedNumber: number.decimals ? number.ints + '.' + number.decimals : number.ints
                })
                throw numberError
            }
        }
    }
    //checker numeric digits out of range in bases less than 11
    if (radix<11) {
        /**@type {string} */
        const digits = !number.decimals ? number.ints : number.ints + number.decimals
        if (digits.split('').some(digit=>Number(digit)>=Number(radix))) {
            const invalidDigit= new customError('invalidDigit',`you are using a base of ${radix} and you have digits in your number greater than the maximum digit allowed for your base`,{
                maximumDigitAllowed:radix-1,
                invalidDigits:digits.split('').filter(digit=>digit>=radix)
            })
            throw invalidDigit
        }
    }
    //checker NaN digits out of range in bases greater than 10
    if (radix>10) {
        /**@type {string} */
        const digits = !number.decimals ? number.ints : number.ints + number.decimals
        if (digits.split('').some(digit=>{
            if (isNaN(digit)) {
                const numericDigit=digit.toUpperCase().charCodeAt(0)-55
                return numericDigit>=Number(radix)
            }else{
                return Number(digit)>=Number(radix)
            }
        })) {
            const invalidDigit= new customError('invalidDigit',`you are using a base of ${radix} and you have digits in your number greater than the maximum digit allowed for your base`,{
                maximumDigitAllowed:String.fromCharCode((radix-1)+55),
                invalidDigits:digits.split('').filter(digit=>{
                    if (isNaN(digit)) {
                        const numericDigit=digit.toUpperCase().charCodeAt(0)-55
                        return numericDigit>=Number(radix)
                    }else{
                        return Number(digit)>=Number(radix)
                    }
                })
            })
            throw invalidDigit
        }
    }

    
}

module.exports = baseChecker