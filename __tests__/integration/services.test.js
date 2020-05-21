const {
  americanas,
  extra,
  magazineluiza,
  shoptime,
  submarino
} = require('../../src/services');

describe('services', () => {

  it('americanas should fetch product data from valid url', async () => {

    const url = "https://www.google.com";

    const productData = await americanas.extractProductData(url);

    expect(productData.name).toBe("");

  });

  it('extra should fetch product data from valid url', async () => {

    const url = "https://www.google.com";

    const productData = await extra.extractProductData(url);

    expect(productData.name).toBe("");

  });

  it('magazineluiza should fetch product data from valid url', async () => {

    const url = "https://www.magazineluiza.com.br/notebook-acer-aspire-3-a315-42g-r6fz-amd-ryzen-5-8gb-1tb-156-placa-de-video-2gb-windows-10/p/225569300/in/nota/";

    const productData = await magazineluiza.extractProductData(url);

    expect(productData.name).toBe("Notebook Acer Aspire 3 A315-42G-R6FZ AMD Ryzen 5 - 8GB 1TB 15,6” Placa de Vídeo 2GB Windows 10");

  });

  it('shoptime should fetch product data from valid url', async () => {

    const url = "https://www.google.com";

    const productData = await shoptime.extractProductData(url);

    expect(productData.name).toBe("");

  });

  it('submarino should fetch product data from valid url', async () => {

    const url = "https://www.google.com";

    const productData = await submarino.extractProductData(url);

    expect(productData.name).toBe("");

  });

})
