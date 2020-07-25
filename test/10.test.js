const censor = require('../src/10')

test('Cencor String Test', () => {
    expect(censor('Saya ingin makan nasi goreng.', ['Saya', 'nasi'])).toBe("#### ingin makan #### goreng.");
    expect(censor('Pada hari minggu saya tidur siang.', ['minggu', 'tidur'], '*')).toBe("Pada hari ****** saya ***** siang.");
});

