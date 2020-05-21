const {magazineluiza} = require('../../src/services/');

describe('services', () => {
    
    it('magazineluiza should return no data on invalid url', async () => {
        const productData = await magazineluiza.extractProductData("https://www.google.com");

        expect(productData).toBe(null);
    });

})