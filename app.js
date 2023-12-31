/*The	basic	functionality	of the "require"	function	is	that	it	reads	a	JavaScript	file,	executes the file, and then proceeds to	return an object.	Using	this object,	one	can	then	use	the	various functionalities	available	in	the	module called	by the	require	function.	So	in	our	case,	since	we want to use	the	functionality	of http	and	we	are	using	the	require(http)	command.*/
var http = require('http');

/*we	are	creating	a	server	application	which	is	based	on	a	simple function.	This	function	is	called,	whenever	a	request	is	made	to	our	server	application.*/
http.createServer(function (req, res) {
  
  /*When	a	request	is	received,	we	are	asking	our	function	to	return	a	"Hello	World"	response	to the	client.	The	writeHead	function	is	used	to	send	header	data		to	the	client	and	while	the		end function	will	close	the	connection	to	the	client.*/
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World!');
  }).listen(8080);
  
/*We	are	then	using	the	.listen	function	to	make	our	server	application	listen	to	client	requests on	port	no	8080.	You	can	specify	any	available	port	over	here.*/

/*A simple Node.js application consists of creating a server which listens on a particular port.When a request comes to the server, the server automatically sends a 'Hello World' response to the client.*/