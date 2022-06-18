import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

describe('src/locale/01.test.ts', function () {
    it('01', function () {
        dayjs.locale('zh-cn');
        expect(dayjs.weekdays(true)).toEqual(['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']);

        dayjs.locale('en');
        expect(dayjs.weekdays(true)).toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    });
});
