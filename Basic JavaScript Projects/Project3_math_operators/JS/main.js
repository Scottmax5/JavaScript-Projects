//Addition function

function addition_Function() {
	var addition = 2 + 2;
	document.getElementById("Add").innerHTML = "2 + 2 = " + addition
}

//Subtraction function

function subtraction_Function() {
	var Subtraction = 5 - 2;
	document.getElementById("Sub").innerHTML = "5 - 2 = " + Subtraction;
}

//Multiplication function

function multiplication() {
	var multiplication = 6 * 8;
	document.getElementById("Mlt").innerHTML = "6 x 8 = " + multiplication;
}

//Division function

function division() {
	var simple_Math = 48/6;
	document.getElementById("Div").innerHTML = "48 / 6 " + simple_Math;
}

//Random

function random() {
	document.getElementById("Ran").innerHTML = Math.random()*10;

}

//Mutliple Operations

function more_Math() {
	var simple_Math = (1 + 2) * 10 / 2 - 5;
	document.getElementById("Mult").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//Modulus Operator

function modulus_Operator() {
	var simple_Math = 25 % 6;
	document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//Negation Operator

function negation_Operator() {
	var x = 10;
	document.getElementById("Neg").innerHTML = -x;
}

//Increment and Decrement

function Increment() {
	var value = document.getElementById("IncText").innerHTML;

	value++;

	document.getElementById("IncText").innerHTML = value;
}

function Decrement() {
	var value = document.getElementById("DecText").innerHTML;

	value--;

	document.getElementById("DecText").innerHTML = value;
}


//Math Object

function math_Object() {
	document.getElementById("PI").innerHTML = Math.PI;
}
