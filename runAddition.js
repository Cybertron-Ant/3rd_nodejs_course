/*We are using the "require" keyword to include the functionality in the Addition.js file.*/
var Addition = require('./Addition.js');


/*Since the functions in the Addition.js file are now accessible, we can now make a call to the AddNumber function. In the function, we are passing 2 numbers as parameters. We are then displaying the value in the console.*/
console.log(Addition.AddNumber(1, 2));


/*When you run the app.js file, you will get an output of value 3 in the console log. The result is because the AddNumber function in the Addition.js file was called successfully and the returned value of 3 was displayed in the console*/