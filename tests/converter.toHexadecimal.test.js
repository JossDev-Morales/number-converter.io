const converter = require("../src/converter.class")

test('Shoul convert a decimal num 255 to decimal number: ff', () => {
    expect(new converter('255', '10').toHexadecimal()).toBe('FF')
})