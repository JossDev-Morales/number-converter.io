const converter = require("../src/converter.class")

test('Shoul convert a hexa num ff to decimal number: 377', () => {
    expect(new converter('FF', '16').toOctal()).toBe('377')
})