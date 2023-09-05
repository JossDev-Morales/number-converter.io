const converter = require("../src/converter.class")

test('Shoul convert a custom base (36) num "P4OAILNTP9M60LX48" to decimal number: "199999999999999941515154152"', () => {
    expect(new converter('P4OAILNTP9M60LX48', '36').toCustomBase('10')).toBe('199999999999999941515154152')
})
test('Shoul convert a custom base (10) num "199999999999999941515154152" to custom 36 base number: "P4OAILNTP9M60LX48"', () => {
    expect(new converter('199999999999999941515154152','10').toCustomBase('36')).toBe('P4OAILNTP9M60LX48')
})