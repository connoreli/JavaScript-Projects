function full_Sentence() {    //define function
    var part_1 = "This is ";  //seperate sentence into 4 parts with diff var
    var part_2 = "part of ";
    var part_3 = "a full ";
    var part_4 = "sentence!";
    var whole_Sentence = part_1.concat(part_2, part_3, part_4);  //concatenate strings together
    document.getElementById("concat").innerHTML = whole_Sentence; //display whole sentence in html
}

function slice_Method() {   //define function
    var sentence = "All work and no play makes Connor a dull boy."  //example sentence
    var section = sentence.slice(27, 33);  //specify which part we want to slice
    document.getElementById("slice").innerHTML = section; //display part we want to slice in HTML
}

function upperCase() {   //define function
    var sentence_1 = "hey my name is connor"   //sentence example
    var result = sentence_1.toUpperCase();   //capitalize sentence_1
    document.getElementById("upper").innerHTML = result;  //display result in html
}

function search_Method() {   //define function
    var sentence_2 = "The quick red fox jumped over the lazy sloth."  //sentence example
    var search = sentence_2.search("red");   //search for "red" in sentence_2
    document.getElementById("search").innerHTML = search;  //display index position in HTML
}

function toString_Method() {  //define function
    var x = 150              //number example
    document.getElementById("to_string").innerHTML = x.toString();  //turn 150 (number) to "150" and display
}

function precision_Method() {   //define function
    var y = 220.21122112211     //number example
    document.getElementById("less_numbers").innerHTML = y.toPrecision(6); //change y to have only 6 digits and display
}

function toFixed_Method() {  //define function
    var num = 432.4321       //number example
    document.getElementById("numbers_after_decimal").innerHTML = num.toFixed(1); //fix numbers after decimal point to 1 and display
}

function valueOf_Method() { //define function
    var text = "Hello, world!"  //example text
    document.getElementById("value_of").innerHTML = text.valueOf();  //find primitive value of the text and display
}