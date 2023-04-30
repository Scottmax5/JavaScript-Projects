//Color list

function Color_Function() {
	var Color_Output;
	var Colors = document.getElementById("Color_Input").value;
	var Color_String = " is a great color!";
	switch(Colors) {
		case "Red":
			Color_Output = "Red" + Color_String;
		break;
		case "Yellow":
			Color_Output = "Yellow" + Color_String;		
		break;
		case "Green":
			Color_Output = "Green" + Color_String;
		break;
		case "Blue":
			Color_Output = "Blue" + Color_String; 
		break;
		case "Pink":
			Color_Output = "Pink" + Color_String;
		break;
		case "Purple":
			Color_Output = "Purple" + Color_String;
		break;
		default:
		Color_Output = "Please enter a color exactly as written on the above list.";
	}
	document.getElementById("Output").innerHTML = Color_Output;
}

//document.getElementsByClassName function

function Hello_World_Function() { 
	var A = document.getElementsByClassName("Click");
	A[0].innerHTML = "The text has changed!";
}

//Adding image in Canvas

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();

//Adding gradiant to Canvas

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

//Form validation

function validateForm() {
	let x = document.forms["myForm"]["fname"].value;
	if (x == "") {
	  alert("Name must be filled out");
	  return false;
	}
  }


  //Popup form

  function openForm() {
	document.getElementById("myForm1").style.display = "block";
  }
  
  function closeForm() {
	document.getElementById("myForm1").style.display = "none";
  }