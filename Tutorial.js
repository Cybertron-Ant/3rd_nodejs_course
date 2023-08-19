/*create the base module*/
var exports = module.exports = {};

exports.tutorial = function()
{
  console.log("Guru99 Tutorial")
}


/*
1. The exports module is used so that whatever function is defined in this file can be
available in other modules in Node.js
2. We are creating a function called tutorial which can be used in other Node.js modules.
3. We are displaying a string "Guru99 Tutorial" in the console when this function is called.*/