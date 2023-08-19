
/*we will create our extended module.*/
var Tutor = require('./Tutorial.js');

exports.NodeTutorial = function() {
console.log("Node Tutorial")

function pTutor() {
  
var pTutor = Tutor

}// end pTutor
}// end NodeTutorial


/*
We are using the "require" function in the new module file itself. Since we are going to

extend the existing module file "Tutorial.js", we need to first include it before extending it.

2. We then create a function called "Nodetutorial." This function will do 2 things,
It will send a string "Node Tutorial" to the console.
It will send the string "Guru99 Tutorial" from the base module "Tutorial.js" to our
extended module "NodeTutorial.js
*/