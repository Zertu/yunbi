import './Expectionhandler'

export function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, ' ');
}

export async function getTickers() {
    try {
        const result = await fetch('https://yunbi.com//api/v2/tickers.json')
    } catch (e) {
        Expectionhandler(e)
    }
    console.log(result)
}

export async function getTicker(market) {
    try {
        result = await fetch('https://yunbi.com//api/v2/tickers/' + market + '.json')
    } catch (e) {
        Expectionhandler(e)
    }
}