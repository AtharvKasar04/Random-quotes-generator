import {quoteslist} from '/quotes.js';

const generateQuote = () => {
    
    let index = Math.floor(Math.random() * quoteslist.length);

    const quote = quoteslist[index].text;
    const author = quoteslist[index].author;

    document.getElementById('quote-text').innerHTML = `${quote}`;
    document.getElementById('quote-author').innerHTML = `Author:- ${author}`;
};

let button = document.getElementById('generate-btn');

button.addEventListener("click", generateQuote);