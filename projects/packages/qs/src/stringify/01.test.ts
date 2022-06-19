import * as qs from 'qs';

describe('src/stringify/01.test.ts', function () {
    it('01', function () {
        expect(qs.stringify({ name: 'luotao', age: 18 })).toEqual('name=luotao&age=18');
    });
});
