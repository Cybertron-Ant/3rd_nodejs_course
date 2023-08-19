/*The	basic	functionality	of the "require"	function	is	that	it	reads	a	JavaScript	file,	executes the file, and then proceeds to	return an object.	Using	this object,	one	can	then	use	the	various functionalities	available	in	the	module called	by the	require	function.	So	in	our	case,	since	we want to use	the	functionality	of http	and	we	are	using	the	require(http)	command.*/
var http = require('http');

/*we	are	creating	a	server	application	which	is	based	on	a	simple function.	This	function	is	called,	whenever	a	request	is	made	to	our	server	application.*/
http.createServer(function (req, res) {