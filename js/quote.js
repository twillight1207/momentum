const quotes = [
    {
        quote: "People love what other people are passionate about.",
        movie: "La La Land",
    },
    {
        quote: "I've never loved anyone the way I love you.",
        movie: "Her",
    },
    {
        quote: "When your mind is made up, there's no point trying to change it.",
        movie: "Once",
    },
    {
        quote: "You can never do anything by half. Do you understand that?",
        movie: "Sing Street",
    },
    {
        quote: "Show me which constellations you know.",
        movie: "Eternal Sunshine",
    },
    {
        quote: "Needed to live humanly, it is very simple. Someone to love and to work",
        movie: "The Intern",
    },
    {
        quote: "If you make a mistake, get all tangled up, just tango on.",
        movie: "Scent of a Woman",
    },
    {
        quote: "Hello, stranger.",
        movie: "Closer",
    },
    {
        quote: "It does not to dwell on dreams and forget to live.",
        movie: "Harry Potter",
    },
    {
        quote: "God, tell us the reason youth is wasted on the young.",
        movie: "Begin Again",
    }

]

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;