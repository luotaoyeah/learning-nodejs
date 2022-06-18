import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('zh-cn');
dayjs.extend(customParseFormat);

describe('src/plugin/customParseFormat.test.ts', function () {
    it('01', function () {
        expect(dayjs('05/02/69 1:02:03 PM -05:00', 'MM/DD/YY H:mm:ss A Z').format()).toEqual('1969-05-02T14:02:03+08:00');
    });
});
