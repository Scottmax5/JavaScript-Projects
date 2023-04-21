//concat() method

function full_Sentence() {
	var part_1 = "I have ";
	var part_2 = "made this ";
	var part_3 = "into a complete ";
	var part_4 = "sentence.";
	var whole_sentence = part_1.concat(part_2, part_3, part_4);
	document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice() method

function slice_Method() {
	var Sentence = "All work and no play makes Johnny a dull boy.";
	var Section = Sentence.slice(27,33);
	document.getElementById("Slice").innerHTML = Section;
}

//Uppercase() method

function upper_Function() {
    var str = "Hello world"
    var string = str.toUpperCase();
    document.getElementById("upper").innerHTML = string
}

//Search() method

function search_Function() {
    var str = "Mr. Blue has a blue house"
    var string = str.search("Blue");
    document.getElementById("search").innerHTML = string
}

//Number() method

function string_Method() {
	var X =182;
	document.getElementById("Numbers_to_string").innerHTML = X.toString()
}

//toPrecision() method

function precision_Method() {
	var X = 12938.3012987376112;
	document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed() method

function fixed_Function() {
    var num = 5.56789;
    var n = num.toFixed()
    document.getElementById("fixed").innerHTML = num
}

//valueOf() method

function value_Function() {
    var str = "Hello World!";
    var string = str.valueOf();
    document.getElementById("value").innerHTML = string
}