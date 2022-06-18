import dayjs from 'dayjs';

describe('src/01.test.js', function () {
    it('01', function () {
        const date: dayjs.Dayjs = dayjs();
        console.log(date.format());
    });
});
