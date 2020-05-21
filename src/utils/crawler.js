const axios = require('axios');
const cheerio = require('cheerio');

const api = axios.default.create({
});

module.exports = {
    async fetchPage(url) {
        const result = await api.get(url);
        return cheerio.load(result.data);
    }
}