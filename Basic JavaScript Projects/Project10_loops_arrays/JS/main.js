//Loop function

function Call_Loop() {
	var Digit = '';
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++
	}
	document.getElementById("Loop").innerHTML = Digit;
}

//Length property

function length() {
    let text = "Hello World!";
    let length = text.length;

document.getElementById("length").innerHTML = length;
}

//For loop

var Instruments = ["Guitars", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
	for (Y = 0; Y < Instruments.length; Y++) { 
    Content += Instruments[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array

function array_Function() {
	var Cat_Picture = [];
	Cat_Picture[0] = "sleeping";
	Cat_Picture[1] = "playing";
	Cat_Picture[2] = "eating";
	Cat_Picture[3] = "purring";
	document.getElementById("Array").innerHTML = "In this picture, the cat is " +
		Cat_Picture[2] + ".";
}

//Const keyword

function constant_Function() {
	const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
	Musical_Instrument.color = "blue"
	Musical_Instrument.price = "$900";
	document.getElementById("Const").innerHTML = "The cost of the " +
		Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Let keyword

var X = 82;
document.write(X);
{
	let X = 33;
	document.write("<br>" + X);
}
document.write("<br>" + X);

//Object

function car() {
    let car = {
        make: "Nissan",
        year: "2023",
        color: "Black",
    };

    document.getElementById("car").innerHTML =
        "I have a " + car.year + " " + car.color + " " + car.make + ".";
}