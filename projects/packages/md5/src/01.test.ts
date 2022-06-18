import md5 from 'md5';

describe('src/01.test.ts', function () {
    it('01', function () {
        expect(md5('HELLO WORLD')).toEqual('361fadf1c712e812d198c4cab5712a79');
    });
});
