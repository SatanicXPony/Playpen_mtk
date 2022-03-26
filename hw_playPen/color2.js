const colors = ["Red", "Yellow", "Orange", "Green", "Blue", "Indigo"];
const quote = ["This is not my color.", "This is my favorite color!"];

function newColor() {
  //Get a Random Color
  let randomColor = Math.floor(Math.random() * colors.length);
  let content = quote[randomColor]; //
  console.log(content);
  //   `${Quote}: .text(Quotes[RandomColor]');
  //  $(“#AuthorDisplay”).text(Authors[RandomNumber])`;
}
newColor();
