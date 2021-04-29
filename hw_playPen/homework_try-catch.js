// Move line 17 into a try/catch block, so that errors
// thrown by divideTwoNumbers() are caught and logged

function divideTwoNumbers(x, y) {
    if (parseFloat(x) !== x) {
      throw new Error('x is not a number');//put each of these into try block?
    }
    if (parseFloat(y) !== y) {
      throw new Error('y is not a number');
    }
    if (y === 0) {
      throw new Error('divide by zero');//line 12 starts the error
    }
    return x / y;
  }
  try {
  console.log(divideTwoNumbers(6, 0));
  } catch(error) {
    console.log('Congatulations, You Played Yourself');
  }
  //question am i changing this log to fit try/catch? or this could be the finally?
