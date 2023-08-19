/*We are using the "require" keyword to include the functionality in the Addition.js file.*/
var Addition = require('./Addition.js');


/*Since the functions in the Addition.js file are now accessible, we can now make a call to the AddNumber function. In the function, we are passing 2 numbers as parameters. We are then displaying the value in the console.*/
console.log(Addition.AddNumber(1, 2));