const leapYear = require('../src/04')

test('Char Length Test', () => {
    expect(leapYear(2020)).toBe(true);
});