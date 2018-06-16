var http=require("http");

var server=http.createServer(function(req,res)
{
	//res.writeHead(200,{"Content-Type":"text/plain"});
	//res.end("Hey..ninjas!");
	console.log(req.url);
	res.writeHead(200,{"Content-Type":"application/json","dataType":"json","Access-Control-Allow-Origin":"*"});
	/*var obj={
		name:"gaurav",
		lname:"ahuja",
		age:19,
		address:"TribuneColony"
	};*/
	const quiz=[
{
	"question":"1.	Hello.....this is the first question",
	"option1":["(A)	Time","false"],
"option2":["(B)	Mass","false"],
	"option3":["(C)	Distance ","true"],
	"option4":["(D)	Energy","false"]	
},
{
	"question":"2.	Which of the following is not equal to watt",
	"option1":["(A)	Joule/second","false"],
	"option2":["(B)	Ampere * volt","false"],
	"option3":["(C)	(Ampere)¬2 * Ohm","false"],
	"option4":["(D)	Ampere/volt","true"]	
},
{
	"question":"3.	Which of the following is not represented in correct unit ",
	"option1":["(A)	Stress/Strain = N/m2","false"],
	"option2":["(B)	Surface tension = N/m","false"],
	"option3":["(C)	Energy = kg-m/sec","true"],
	"option4":["(D)	Pressure = N/m2","false"]	
},
{
	"question":"4.	A suitable unit for gravitational constant is ",
	"option1":["(A)	Kg-m sec-1","true"],
	"option2":["(B)	N m-1 sec","false"],
	"option3":["(C)	N m2 kg-2","false"],
	"option4":["(D)	Kg-m sec-2","false"]	
},
{
	"question":"5.	In S = a+ bt + ct2 , S is measured in metre and t in second. The unit of c is ",
	"option1":["(A)	None","true"],
	"option2":["(B)	m","false"],
	"option3":["(C)	ms-1","false"],
	"option4":["(D)	ms-2","false"]	
}
];

	
	res.end(JSON.stringify(quiz));
	
	//res.end("./sample.json");
});

server.listen(8000,"127.0.0.1");//"127.0.0.1");
console.log("Yo guys...listening at port 8000");
