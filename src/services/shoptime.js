const crawler = require('../utils/crawler');

async function extractProductData(url) {
    const $ = await crawler.fetchPage(url);
    let productData = {
        name: "",
        cashPrice: 999999,
        forwardPrice: 999999,
    };

    

    return productData;
}

module.exports = {
    extractProductData
}