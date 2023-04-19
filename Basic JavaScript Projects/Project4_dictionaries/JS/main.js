//Animal function

function animal_Dict() {
	var Animal = {
		Species:"Dog",
		Color:"Black",
		Breed:"Labrador",
		Age:5,
		Sound:"Bark!"
	};
    delete Animal.Sound;    //Deleting Sounds KVP from dictionary
	document.getElementById("Animal").innerHTML = Animal.Sound;
}