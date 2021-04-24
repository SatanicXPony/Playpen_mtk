//start with prompt sync for statement 'Which color?

//set up variables 
const favColor = "Green";
let randomColors = ["Red", "Orange", "Yellow", "Blue", "Green", "Indigo", "Violet"];
// create an array variable of random colors 
// const variable of favorite color
function myColor(favColor){
//create loop that iterates thru array for randomColors
    for(let i = 0; i <= 6; i++){//eureka! green only has 5 chracters so iterate for true using length
        if (randomColors.length < 4) {//need to make a condition for character less than 5
            console.log('Is this your color?');
        } else if (randomColors.length > 5) {//condition for characters greater than 6
            console.log('Am I getting warmer?');
        } else if (randomColors.length === 4) {//condition for only green
            console.log('This is your favorite color!')
        } else {
            console.log(randomColors);
        }
    } //curent problem: instead of randomColors and quote, only the text for line 14 displays
}
myColor(favColor);
