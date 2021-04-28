// This program rolls five dice three times,
// and prints out the best (highest scoring) roll.
// Weekend project: Organize and simplify this program
// by moving repeated code into reusable functions

const DICE_SYMBOLS = [ //an array of dice symbols, does not change
    '\u2680',  // ⚀
    '\u2681',  // ⚁
    '\u2682',  // ⚂
    '\u2683',  // ⚃
    '\u2684',  // ⚄
    '\u2685',  // ⚅
  ];
  
  let bestTotal = 0; //make a function called bestTotal that may change, set it to 0
  let currentTotal = 0;
  let rolledDiceIndices = []; //make a function that may change; accepts array values
  let rolledDiceSymbols = [];
  
  
 function rollDiceFiveTimes(rounds) { //create DRY function; roll dice five times

  currentTotal = 0; //fresh start at zero each round
  rolledDiceIndices = []; // array of dice rolled refreshed at zero as well
  
  // Loop five times
  for (let i = 0; i < 5; i++) { //start w the first(0) instance, every instance is less than five, 
    const randomIndex = Math.floor(Math.random() * 6);
    rolledDiceIndices.push(randomIndex);
  //whatever gets rolled will be pushed into a factor of 6 (or multiplied by 6?)
    // The first array index is 0, so the "value" of this die
    // is *the index plus one!*
    currentTotal = currentTotal + randomIndex + 1;
  }
  
  // If this is our best total, save it!
  if (currentTotal > bestTotal) { //if bestTotal is greater than currentTotal, it becomes new current
    bestTotal = currentTotal;
  }
  
  // "Map" the *array* of indices into an *array* of dice symbols
  // JSYK: The .map() method takes a function as its argument!
  rolledDiceSymbols = rolledDiceIndices.map(i => DICE_SYMBOLS[i]); 
  
  // The "\t" in these strings prints a tab/indent character
  // Any string passed to .join() will be interleaved in the output

  // console.log(rolledDiceSymbols.join('  *  ')); //max's examples on understanding what .join does
  // console.log(rounds);
  // console.log(rolledDiceSymbols[2])
  // console.log(rolledDiceSymbols[4])
  // console.log("-----")

// Convert our symbol *array* into a *string* with .join()
  console.log(`${rounds}:\t${rolledDiceSymbols.join(' ')}`); 
  //log the parameters for rounds *string in parentheses for 1,2,3*; for stylistic puposes, 
  //line the array of dice symbols horizontally with a space between, create new line for each roll
  
 }
// call function to begin rounds
 rollDiceFiveTimes("First")
 rollDiceFiveTimes("Second")
 rollDiceFiveTimes("Third")
  // Now we can print the best total!
  console.log(`Best total:\t${bestTotal}`);
  //display the phrase best total:^^ whatever the best one is

  //pro tip: trust your gut, read and add comments to understand what to do, TRUST YOUR GUT!