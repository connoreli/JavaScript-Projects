function call_Loop() {    //define function
    var Digit = "";
    var x = 1;      //define variables
    while (x < 11) {             //while x is less than 11 perform this function
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = Digit;   //display
}


var instruments = ["Guitar", "Drums", "Bass", "Piano", "Violin", "Trumpet", "Flute"];  //define variable
var content = "";  //variable to help display
var y;
function for_Loop() {    //for loop
    for (y = 0; y < instruments.length; y++) {    //as long as the length of instruments > 0 add an instrument
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;  //display
}
function cat_Array() {      // array function
    var cat_pic = []        //define variable
    cat_pic[0] = "sleeping" //position 0-3
    cat_pic[1] = "playing"
    cat_pic[2] = "eating"
    cat_pic[3] = "purring"
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_pic[2] + ".";  //display
}
function constant_Function() {  //define function
    const musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };  //define constant
    musical_Instrument.color = "blue";   //change color
    musical_Instrument.price = "$900";  //add property
    document.getElementById("constant").innerHTML = "The cost of the " + musical_Instrument.type + " was " + musical_Instrument.price;  //display
}

var x = 10       //example of a let variable only applying to function scope and not global scope like "var" does
document.write(x)
{
    let x = 5
    document.write("<br>" + x);
}
document.write("<br>" + x);

let car = {           //object model using let function
    make: "Toyota ",
    model: "Camry ",
    year: "2014 ",
    color: "grey ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model; 
    }
};
document.getElementById("object").innerHTML   //display