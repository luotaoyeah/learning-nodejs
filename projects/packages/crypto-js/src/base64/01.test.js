const Base64 = require('crypto-js/enc-base64');

describe('src/base64/01.test.js', () => {
    it('01', function () {
        const result = Base64.parse('abc').toString();
        console.log(result);
    });
});
