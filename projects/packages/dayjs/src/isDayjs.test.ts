import dayjs from 'dayjs';

describe('src/isDayjs.test.ts', function () {
    it('01', function () {
        expect(dayjs.isDayjs(dayjs())).toEqual(true);
        expect(dayjs.isDayjs(new Date())).toEqual(false);
    });
});
