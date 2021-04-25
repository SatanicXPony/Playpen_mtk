const Colors = ['Red', 'Yellow', 'Orange', 'Green','Blue', 'Indigo'];
const Quote = ['This is not my color.', 'This is my favorite color!']


function newColor(){
 //Get a Random Color 
 let RandomColor = Math.floor(Math.random()*Colors.length);
 let content = Quote[RandomColor];//content not read; maybe use an 'onclick' declaration or .log?
 //`${Quote}: .text(Quotes[RandomColor]');
 //$(“#AuthorDisplay”).text(Authors[RandomNumber]);
};