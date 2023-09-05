const converter = require("../src/converter.class")

test('trying to convert a decimal base to a binary base',()=>{
    expect(new converter('10.5','10').toBinary()).toBe('1010.101')
})