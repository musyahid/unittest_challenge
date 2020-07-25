const mebiToKibi = require('../src/03')

test('Char Length Test', () => {
    expect(mebiToKibi(2)).toBe(2048);
});