function getRandomQuote(quotesObject) {
    let randomNumber = Math.floor(Math.random() * quotesObject.quotes.length);
    let quote = quotesObject.quotes[randomNumber];
    return quote;
}

export default getRandomQuote;