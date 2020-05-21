const crawler = require('../utils/crawler');

async function extractProductData(url) {
    const $ = await crawler.fetchPage(url);
    let productData = {
        name: "",
        cashPrice: 999999,
        forwardPrice: 999999,
    };

    productData.name = $("h1.header-product__title").text();
    
    let cashPrice = $("span.price-template__text").text();
    cashPrice = cashPrice.replace(".", "");
    cashPrice = cashPrice.replace(",", ".");
    productData.cashPrice = parseFloat(cashPrice);

    let forwardPriceDescription = $("div.price-template").children().nextAll()[0].next.data;    
    productData.forwardPrice = parseFloat(forwardPriceDescription.match(/\d+\.*\d+,\d+/)[0].replace(".", "").replace(",", "."));

    return productData;
}

module.exports = {
    extractProductData
}