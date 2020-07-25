const repeatString = require('../src/06')

test('Repeat String Test', () => {
    expect(repeatString('Makan!', 3)).toBe('Makan!Makan!Makan!');
});