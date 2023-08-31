/**
 * Convert a number in some base betwen 1 and 36 to a decimal number, under the rules for bases, see at www.github.com
 * @param {string} number The number representation
 * @param {('2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36')} radix The base of the number representation
 * @see www.github.com baseToDecimal Doc 
 * @returns {string} The number in decimal base
 */
function baseToDecimal(number, radix) {
    let result=0n
    const digits=String(number).split('').reverse()
    const values= digits.map((digit,i)=>{
        const position=i
        const base=radix
        if (isNaN(digit)) {
            return (digit.toUpperCase().charCodeAt(0)-55) * Math.pow(base,position)
        }else{
            return digit * Math.pow(base,position)
        }
    }).reverse()
    values.forEach(value=>{
        result=BigInt(value)+BigInt(result)
    })
    return result.toString()
}
module.exports = baseToDecimal