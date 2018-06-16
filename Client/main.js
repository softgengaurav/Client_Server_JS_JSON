var ourRequest=new XMLHttpRequest();
var quiz;
ourRequest.open('GET','http://127.0.0.1:8000/',true);
ourRequest.onload=function(){
	var ourData=JSON.parse(ourRequest.responseText);
	quiz=ourData;
	
};
ourRequest.send();
console.log("outside function");
//console.log(ourRequest.responseText);
var i=0;
var score=0;

window.onload=function()
{document.bgColor="yellow";
	//alert("ehllo");
	document.getElementById("ques").innerHTML=`${quiz[i].question}`;
	document.getElementById("op1").innerHTML=`${quiz[i].option1[0]}`;
	document.getElementById("op2").innerHTML=`${quiz[i].option2[0]}`;
	document.getElementById("op3").innerHTML=`${quiz[i].option3[0]}`;
	document.getElementById("op4").innerHTML=`${quiz[i].option4[0]}`;
	
//	document.getElementById("b1").addEventListener("click",function(){alert("Clicked");})//checkAns);
document.getElementById("op1").addEventListener("click",checkAns);
document.getElementById("op2").addEventListener("click",checkAns);
document.getElementById("op3").addEventListener("click",checkAns);
document.getElementById("op4").addEventListener("click",checkAns);
addtimer();
}
var sec=20;
var t1;
var t2;

function addtimer()
{

t1=setInterval(function(){
if(sec==-1)
{
	window.clearInterval(t1);
alert("Time expired");
next_item();
}
document.getElementById("c").innerHTML=`${sec}`;
	sec-=1;

}
,1000);
}

function display()
{
	//setTimeout(next_item,25000);
	//sec=0;
	appear();
	addtimer();
	document.getElementById("ques").innerHTML=`${quiz[i].question}`;
	document.getElementById("op1").innerHTML=`${quiz[i].option1[0]}`;
	document.getElementById("op2").innerHTML=`${quiz[i].option2[0]}`;
	document.getElementById("op3").innerHTML=`${quiz[i].option3[0]}`;
	document.getElementById("op4").innerHTML=`${quiz[i].option4[0]}`;
	
	document.getElementById("ques").className="q";	
	document.getElementById("op1").className="idle";	
	document.getElementById("op2").className="idle";	
	document.getElementById("op3").className="idle";	
	document.getElementById("op4").className="idle";	
	
}
var pos;
function next_item()
{
	clearTimeout(t2);
	clearInterval(t1);
	pos=1;
	var el=document.getElementById("mainarea");
//el.style.backgroundColor="yellow";

	if(i<(quiz.length-1))
	i+=1;
sec=20;

el.style.opacity=1;
var t3=setInterval(function(){el.style.opacity=pos;pos-=0.01;if(pos==0.059999999999999255){display();clearInterval(t3)}},5);


//	var el=document.getElementById("mainarea");
//	el.style.bgColor="blue";
	//display();
}

function prev_item()
{
	clearTimeout(t2);
	clearInterval(t1);
	if(i>0)
i-=1;
sec=20;
display();	
}


pos=1;
function disappear()
{
var el=document.getElementById("mainarea");
//el.style.backgroundColor="yellow";

el.style.opacity=1;
var t3=setInterval(function(){el.style.opacity=pos;pos-=0.01;if(pos==0.059999999999999255){display();clearInterval(t3)}},10);

}
function appear()
{
var el=document.getElementById("mainarea");
//el.style.backgroundColor="yellow";

var t3=setInterval(function(){el.style.opacity=pos;pos+=0.01;if(pos==1){clearInterval(t3)}},10);
}


function checkAns()
{
	
	//alert(this.id);
	if(this.id=="op1")
	{
if(quiz[i].option1[1]=="true")
{    score+=1;
	document.getElementById("op1").className="correct";
	clearInterval(t1);
	clearInterval(t2);
	t2=setTimeout(next_item,200);
	
	
}
	else
	{
	document.getElementById("op1").className="incorrect";
	clearInterval(t1);
	clearInterval(t2);
	t2=setTimeout(next_item,200);
	}
	if(i==quiz.length-1)
		t4=setTimeout(function(){alert("Quiz has been finished...your Score : "+score);},200);
	}
	else if(this.id=="op2")
	{
if(quiz[i].option2[1]=="true")
{
	score+=1;
	document.getElementById("op2").className="correct";
	clearInterval(t1);
	t2=setTimeout(next_item,200);
	
	
}
	else
	{
		clearInterval(t1);
	clearInterval(t2);
	t2=setTimeout(next_item,200);
	document.getElementById("op2").className="incorrect";
	}
	if(i==quiz.length-1)
		t4=setTimeout(function(){alert("Quiz has been finished...your Score : "+score);},200);
	}
	else if(this.id=="op3")
	{//alert("3rd has been invoked");
if(quiz[i].option3[1]=="true")
{
	score+=1;
	document.getElementById("op3").className="correct";
	clearInterval(t1);
	t2=setTimeout(next_item,200);
	
	
}
	else
	{
		clearInterval(t1);
	clearInterval(t2);
	t2=setTimeout(next_item,200);
	document.getElementById("op3").className="incorrect";
	}
	if(i==quiz.length-1)
		t4=setTimeout(function(){alert("Quiz has been finished...your Score : "+score);},200);
	}
	else if(this.id=="op4")
	{
if(quiz[i].option4[1]=="true")
{
	score+=1;
	document.getElementById("op4").className="correct";
	clearInterval(t1);
	t2=setTimeout(next_item,200);
	
	
}
else
{
	clearInterval(t1);
	clearInterval(t2);
	t2=setTimeout(next_item,200);
	document.getElementById("op4").className="incorrect";
	}
	if(i==quiz.length-1)
		t4=setTimeout(function(){alert("Quiz has been finished...your Score : "+score);},200);
	}	
	}