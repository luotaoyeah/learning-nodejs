const UTF8 = require('crypto-js/enc-utf8');
const Base64 = require('crypto-js/enc-base64');

describe('src/UTF8/01.test.js', () => {
    it('01', function () {
        const encryptByBase64 = (text) => {
            return UTF8.parse(text).toString(Base64);
        };
        const decryptByBase64 = (text) => {
            return Base64.parse(text).toString(UTF8);
        };

        const result = encryptByBase64('abc');
        console.log(result);

        const text = decryptByBase64(result);
        expect(text).toEqual('abc');
    });
});
