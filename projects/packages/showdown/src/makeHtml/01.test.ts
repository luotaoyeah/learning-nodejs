import { Converter } from 'showdown';

describe('src/makeHtml/01.test.ts', function () {
    it('01', function () {
        const converter = new Converter();
        const html = converter.makeHtml('# foo');
        expect(html).toEqual('<h1 id="foo">foo</h1>');
    });
});
