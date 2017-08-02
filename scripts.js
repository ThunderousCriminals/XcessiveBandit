//Initialize array with all gifs
const gifs = ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif', '8.gif', '9.gif', '10.gif'];

//Select random number between 0 - length of the array.
const rand = Math.floor(Math.random() * gifs.length);

//Change the body element's background-image
document.body.style.backgroundImage = 'url(' + gifs[rand] + ')';
