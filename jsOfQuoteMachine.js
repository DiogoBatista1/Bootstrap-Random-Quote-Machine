var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

const QUOTE_BANK = [
    {
        author: "Arthur Schopenhauer",
        quote: "A man can be himself only so long as he is alone; and if he does not love solitude, he will not love freedom; for it is only when he is alone that he is really free." 
    },
    {
           author: "Arthur Schopenhauer",
        quote: "Every man takes the limits of his own field of vision for the limits of the world."
    },
    {
        author: "Arthur Schopenhauer",
        quote: "It is difficult to find happiness within oneself, but it is impossible to find it anywhere else."
    },
    {
       author: "Nelson Rodrigues",
       quote: "Muitas vezes é a falta de caráter que decide uma partida. Não se faz literatura, política e futebol com bons sentimentos." 
    },
    {
        author: "Nelson Rodrigues",
        quote: "Man finds happiness only in the superfluous. Under communism, he has only the essentials. How abominable and ridiculous!"
    },
    {
        author: "Nelson Rodrigues",
        quote: "To be the best in the world in anything, even 'long distance spitting', implies a grave, heavy and suffocating responsibility."
    },
    {
        author: "Friedrich Nietzsche",
        quote: "Without music, life would be a mistake."
    }
]
window.onload = init;
function init(){
    generateQuote();
}

function generateQuote(){
    let sizeOfQuote = QUOTE_BANK.length;
    let randomIndex = Math.floor(Math.random() * sizeOfQuote)
    let quoteData = QUOTE_BANK[randomIndex]

    let tweetLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    
    // Add the quote
    let quoteInApiFormat = quoteData.quote.replace(/ /g, "%20");

    tweetLink += quoteInApiFormat;
    // add the author
    let authorInApiFormat = quoteData.author.replace(/ /g, "%20");

    tweetLink += " ─ " + authorInApiFormat;

    console.log("Geração coca-cola");
    document.getElementById("tweet-quote").href = tweetLink;
    document.getElementById("text").innerText = quoteData.quote;
    document.getElementById("author").innerText = quoteData.author;

    //change color of page
    var color = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[color];
}