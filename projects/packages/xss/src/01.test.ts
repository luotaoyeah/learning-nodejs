import xss from 'xss';

describe('src/01.test.ts', function () {
    it('01', function () {
        const html = '<script>alert("HELLO")</script>';

        expect(xss(html)).toEqual('&lt;script&gt;alert("HELLO")&lt;/script&gt;');
    });
});
