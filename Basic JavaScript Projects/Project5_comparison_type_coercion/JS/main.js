document.write(typeof "Word");  //Type of operator

document.write("<br></br>");    //Break

document.write("10" + 5);       //Type coercion

//NaN true and false

function my_Function1() {
	document.getElementById("True").innerHTML = isNaN('This is a string');
}

function my_Function2() {
	document.getElementById("False").innerHTML = isNaN('007');
}

//Infinity and Negative Infinity

function my_Infinity() {
    document.getElementById("Inf").innerHTML = 2E310;
}

function my_Neginf() {
    document.getElementById("Neginf").innerHTML = -3E310;
}

//Boolean logic
document.write("<br></br>")

document.write(10 > 2);

document.write("<br></br>")

document.write(10 < 2);

//Console log function

console.log(2 + 2);

console.log(10 < 2);

//Double equal signs

document.write("<br></br>")

document.write(10 == 10);

//Triple equal signs

document.write("<br></br>")

X = 10;
Y = 10;
document.write(X === Y);
document.write("<br></br>")

X = 82;
Y = "82";
document.write(X === Y);
document.write("<br></br>")

A = "Magnus";
B = "Magnus";
document.write(A === B);
document.write("<br></br>")

A = "Magnus";
B = "Magnus1";
document.write(A === B);
document.write("<br></br>")

//And Or operators

document.write(5 > 2 && 10 > 4);
document.write("<br></br>")

document.write(5 > 10 || 10 > 4);
document.write("<br></br>")

//Not function

function not_Function() {
	document.getElementById("Not").innerHTML = !(20 > 10);
}