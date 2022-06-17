const MD5 = require('crypto-js/md5');

describe('src/MD5/01.test.js', () => {
    it('01', function () {
        expect(MD5('foo').toString()).toEqual('acbd18db4cc2f85cedef654fccc4a4d8');

        expect(MD5('foo').toString()).toEqual(MD5('foo').toString());
        expect(MD5('foo').toString()).not.toEqual(MD5('bar').toString());
    });
});
