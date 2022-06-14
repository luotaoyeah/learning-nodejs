const zxcvbn = require('zxcvbn');

describe('src/01.test.js', function () {
    it('01', function () {
        const result = zxcvbn('admin');
        expect(result.score).toBe(0);
    });
});
