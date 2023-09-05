const converter = require("../src/converter.class")

test('try to use the converter constructor and use the composition of the number',()=>{
    expect(new converter('1010','2').composition).toStrictEqual({ base: '2', sign: '+', number: { ints: '1010', decimals: undefined } })
})