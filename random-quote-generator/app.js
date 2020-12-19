// variables

const newQuote = document.querySelector(".new-button");
const quote = document.querySelector("#text");
const author = document.querySelector("#author");
const quoteBox = document.querySelector("#quote-box");
const body = document.querySelector('body');
const tweet = document.querySelector(".twitter");
let tweetLink = document.querySelector(".tweet-link")
let count = 0;
let quoteVariable, authorVariable;


// Event Listeners

newQuote.addEventListener("click", fetchNewQuote);
tweetLink.addEventListener('click', tweetQuote);
// body.addEventListener('load', fetchNewQuote)
// Functions
let colors = ['red', 'blue', 'brown', 'black', 'green', 'indigo', 'magenta']



function fetchNewQuote() {
    callApi()
}

function callApi() {
    count++;
    if (count > 6) {
        count = 0;
    }
    fetch("https://api.quotable.io/random").then(res => res.json())
        .then(data => {
            quoteVariable = data.content;
            authorVariable = data.author;
            if (data.content) {
                quote.innerHTML = `<p><i class="quote fas fa-quote-left"></i>${data.content}</p>`
                author.innerHTML = `- ${data.author}`;
                body.classList.add('transition')
                quoteBox.style.color = `${colors[count]}`;
                body.style.backgroundColor = `${colors[count]}`;
                newQuote.style.backgroundColor = `${colors[count]}`;
                tweet.style.color = `${colors[count]}`;

            } else {
                quote.innerHTML = `<p><i class="quote fas fa-quote-left"></i>${data.statusMessage}</p>`
                quoteBox.style.color = `${colors[count]}`;
                body.style.color = `${colors[count]}`;
                newQuote.style.backgroundColor = `${colors[count]}`;
            }
        })
        .catch(err => {
            quote.innerHTML = `<p><i class="quote fas fa-quote-left"></i>API FAILED</p>`
            console.log(err)
        });
}

document.addEventListener('DOMContentLoaded', () => {
    callApi()
});

function tweetQuote() {

    let twitterURL = "https://twitter.com/intent/tweet?text=" + quoteVariable + " - " + authorVariable;
    tweetLink.setAttribute('href', twitterURL);


}