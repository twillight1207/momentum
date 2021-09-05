const quotes = [
    {
        quote: "Sometimes you gotta run before you walk.",
        movie: "Iron Man",
    },
    {
        quote: "I love you three thousand.",
        movie: "Tony Stark",
    },
    {
        quote: "Uneasy lies the head that wears a crown",
        movie: "Nick Fury",
    },
    {
        quote: "I can do this all day.",
        movie: "Captain America",
    },
    {
        quote: "I have nothing to prove to you.",
        movie: "Captain Marvel",
    },
    {
        quote: "A thing isn't beautiful because it lasts. It's a privilege to be among them.",
        movie: "Vision",
    },
    {
        quote: "People without a vision for the future, will always return to their past.",
        movie: "Black Widow",
    },
    {
        quote: "We never lose our demons. We only learn to live above them.",
        movie: "The Ancient One",
    },
    {
        quote: "Freedom is life's great lie, and once you accept that, you will know peace.",
        movie: "Loki",
    },
    {
        quote: "Avengers, Assemble",
        movie: "Captain America",
    }

]

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;