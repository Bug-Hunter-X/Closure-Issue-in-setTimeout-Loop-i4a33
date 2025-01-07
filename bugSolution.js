function myFunction() {
  for (let i = 0; i < 10; i++) {
    // Use an immediately invoked function expression (IIFE) to capture the current value of i
    (function(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}

myFunction();