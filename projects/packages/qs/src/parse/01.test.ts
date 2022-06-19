import * as qs from 'qs';

describe('src/parse/01.test.ts', function () {
    it('01', function () {
        expect(qs.parse('name=luotao&age=18')).toEqual({ name: 'luotao', age: '18' });
    });
});
