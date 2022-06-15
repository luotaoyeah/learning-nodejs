const data = require('china-area-data');

describe('src/01.test.js', () => {
    it('01', function () {
        const provinces = data['86'];
        const provincesNames = Object.keys(provinces).map((value) => provinces[value]);
        console.log(provincesNames);
    });
});
