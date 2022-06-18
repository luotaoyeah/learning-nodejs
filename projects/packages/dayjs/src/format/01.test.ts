import dayjs from 'dayjs';

describe('src/format/01.test.ts', function () {
    it('01', function () {
        const date01 = dayjs('1111-11-11 11:11:11').format();
        expect(date01).toEqual('1111-11-11T11:11:11+08:00');

        const date02 = dayjs('1111-11-11 11:11:11').format('YYYY-MM-DD HH:mm:ss');
        expect(date02).toEqual('1111-11-11 11:11:11');
    });
});
