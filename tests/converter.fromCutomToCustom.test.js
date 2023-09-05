const converter = require("../src/converter.class")

test('should convert from a base 21 to a base 16', () => {
    expect(converter.fromCustomToCustom({ number: 'A6K6CC9AI389523KDG95CCF', base: '21' }, 16)).toBe('FFFFFFFFFFFFFFFFFFFFFFFFF')
})
test('should convert from a 16 base to a base 21', () => {
    expect(converter.fromCustomToCustom({ number: 'FFFFFFFFFFFFFFFFFFFFFFFFF', base: '16' }, 21)).toBe('A6K6CC9AI389523KDG95CCF')
})