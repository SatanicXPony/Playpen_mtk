const colors = ["Red", "Yellow", "Orange", "Green", "Blue", "Indigo"];
const quote = ["This is not my color.", "This is my favorite color!"];

function newColor() {
  //Get a Random Color
  let randomColor = Math.floor(Math.random() * colors.length);
  if (randomColor === 4) {
    console.log(colors(quote[1]));
  } else if (randomColor < 5) {
    console.log(quote[0]);
  } else {
    console.log(colors);
  }
}
newColor(colors);

//console.log(content);
//   `${Quote}: .text(Quotes[RandomColor]');
//  $(“#AuthorDisplay”).text(Authors[RandomNumber])`;
