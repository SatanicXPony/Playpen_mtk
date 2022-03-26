const colors = ["Red", "Yellow", "Orange", "Green", "Blue", "Indigo"];
const quote = ["This is not my color.", "This is my favorite color!"];

function newColor() {
  //Get a Random Color
  let randomColor = Math.floor(Math.random() * colors.length);
  //are we doing the full length or the length of a specific color?
  let content = quote[randomColor]; //may need a conditional to return the value of quote
  console.log(content);
  //   `${Quote}: .text(Quotes[RandomColor]');
  //  $(“#AuthorDisplay”).text(Authors[RandomNumber])`;
}
newColor();
