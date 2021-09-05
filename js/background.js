const images = ["shangchi_half.png", "widow.png", "wanda_half.png"];
const images2 = ["spiderman_half.png", "tena_half.png", "loki_half.png"]
const chosenImage2 = images2[Math.floor(Math.random() * images2.length)];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const left = document.querySelector("#main #left-img");
const right = document.querySelector("#main #right-img");


const rightImage = document.createElement("img");
rightImage.src = `img/${chosenImage}`;

right.appendChild(rightImage);

const leftImage = document.createElement("img");
leftImage.src = `img/${chosenImage2}`;

left.appendChild(leftImage);