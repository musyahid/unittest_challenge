const symmetrical = require('../src/09')

test('Symmetrical String Test', () => {
    expect(symmetrical('malam')).toBe(true);
    expect(symmetrical('taat')).toBe(true);
    expect(symmetrical('tidur')).toBe(false);
});

