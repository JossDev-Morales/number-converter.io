const converter = require("../src/converter.class")

test('Shoul convert a hexa num ff to decimal number: 255', () => {
    expect(new converter('FF', '16').toDecimal()).toBe('255')
})