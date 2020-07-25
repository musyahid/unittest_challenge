const charLength = require('../src/01')

test('Char Length Test', () => {
    expect(charLength('abror')).toBe(5);
});