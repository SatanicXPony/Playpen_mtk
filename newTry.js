const randomColors = ['Red', 'Yellow', 'Orange', 'Green', 'Blue', 'Violet'];
const colorQuotes = {
    Red: "close, but not mmy favorite color.", 
    Yellow: "close, but not mmy favorite color.",
    Orange: "close, but not mmy favorite color.",
    Green: "This is my favorite color.",
    Blue: "close, but not mmy favorite color.",
    Violet: "close, but not mmy favorite color.",

}
let currentColor = "";
while(randomColors.length > 0) {
    const randomColorsIndex = Math.floor(Math.random() * randomColors.length);
    currentColor = randomColors.splice(randomColorsIndex, 1)[0];
    //currentColor = randomColors[randomColorsIndex];
    console.log(currentColor);
    console.log(colorQuotes[currentColor]);
}




    