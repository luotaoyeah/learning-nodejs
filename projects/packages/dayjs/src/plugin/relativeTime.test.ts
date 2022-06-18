import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

describe('src/plugin/relativeTime.test.ts', function () {
    it('01', function () {
        // '从现在(fromNow)'到那时
        console.log(dayjs('1990').fromNow());
        console.log(dayjs('1990').fromNow(true));

        // 从那时'到现在(toNow)'
        console.log(dayjs('1990').toNow());
        console.log(dayjs('1990').toNow(true));
    });

    it('02', function () {
        expect(dayjs('1990').from('2023')).toEqual('33 年前');
        expect(dayjs('1990').from('2023', true)).toEqual('33 年');

        console.log(dayjs('1990').to('2023'));
        console.log(dayjs('1990').to('2023', true));
    });
});
