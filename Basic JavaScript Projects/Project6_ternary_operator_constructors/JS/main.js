//Ride function

function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Vote function

function Vote_Function() {
	var Age, Can_vote;
	Age = document.getElementById("Age").value;
	Can_vote = (Age < 18) ? "You are too young":"You are able";
	document.getElementById("Vote").innerHTML = Can_vote+ " to vote.";
}

//Keyword function

function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML =
	"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//New keyword

function Dog(Breed, Age, Color, Toy) {
	this.Dog_Breed = Breed;
	this.Dog_Age = Age;
	this.Dog_Color = Color;
	this.Dog_Toy = Toy;
}
var Stella = new Dog("Poodle", "2", "Black", "Bone");
var Rocky = new Dog("French Bulldog", "1", "Tan", "Ball");
var Cabela = new Dog("Sheep dog", "10", "Black", "Ball");
function my_Dog() {
	document.getElementById("New_and_This").innerHTML = "Rocky is a " + Rocky.Dog_Breed + " he is " + Rocky.Dog_Age + " and he loves his " + Rocky.Dog_Toy;
}

//Nested function

function count_Function() {
	document.getElementById("Nested_Function").innerHTML = Count();
	function Count() {
		var Starting_point = 9;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;
	}	
}