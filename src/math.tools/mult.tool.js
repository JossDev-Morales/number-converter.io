const add = require("./add.tool")

function mult(number,factor) {
    let iterator=1
    let tempResult=number
    while (iterator<factor) {
        iterator++
        tempResult=add(number,tempResult)
    }
    return tempResult
}
module.exports=mult