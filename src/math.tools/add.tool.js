/**
 * 
 * @param {string} number1 
 * @param {string} number2 
 */
function add(number1, number2) {
    const greater = number1.length < number2.length ? String(number2).split('').reverse() : String(number1).split('').reverse()
    const smaller = number1.length < number2.length ? String(number1).split('').reverse() : String(number2).split('').reverse()
    let next = 0
    const result = greater.map((digit, index) => {
        let adding = Number(digit) + Number(smaller[index] ?? 0) + next
        if (adding >= 10) {
            if (greater[index + 1] !== undefined) {
                next = 1
                adding -= 10
            }
        }else{
            next=0
        }
        return adding
    }).reverse()
    return result.join('')
}
module.exports = add