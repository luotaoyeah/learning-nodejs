const AES = require('crypto-js/aes');
const UTF8 = require('crypto-js/enc-utf8');

describe('src/AES/01.test.js', () => {
    it('01', function () {
        const key = '_11111000001111@';
        const iv = '@11111000001111_';

        const text = 'abc';

        const result = AES.encrypt(text, key, { iv: UTF8.parse(iv) }).toString();
        console.log(result);

        const text01 = AES.decrypt(result, key, { iv: UTF8.parse(iv) }).toString(UTF8);
        expect(text01).toEqual(text);
    });
});
