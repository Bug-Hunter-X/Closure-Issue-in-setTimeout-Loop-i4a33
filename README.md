# Closure Issue in setTimeout Loop

This repository demonstrates a common JavaScript error related to closures within `setTimeout` loops.  The issue arises because the value of `i` is not captured at the time `setTimeout` is called, but rather when the timeout function executes. This results in all the `console.log` statements printing the final value of `i` (which is 10). 

The `bug.js` file contains the erroneous code, while `bugSolution.js` presents the corrected version.

## How to reproduce

1. Clone this repository.
2. Open the `bug.js` file in a browser's developer console or Node.js.
3. Run the `myFunction()` function.
4. Observe that the output is '10' ten times.
5. Compare this with the output of `bugSolution.js` which showcases the correct implementation.