function addition_function() { // defining addition function
    var addition = 2 + 2; // what the variable will add
    document.getElementById("add").innerHTML = "2 + 2 = " + addition; // tell html to print answer
}

function subtraction_function() { // defining subtraction function
    var subtraction = 8 - 4; //what the variable will subtract
    document.getElementById("subtract").innerHTML = "8 - 4 = " + subtraction; //tell html to print answer
}

function multiplication() { //define multiplication function
    var simple_Math  = 4 * 6; //telling variable to perform 4 * 6
    document.getElementById("multiply").innerHTML = "4 * 6 = " + simple_Math; //tell html to print answer
}

function division() { //define division function
    var simple_Math = 25 / 5; //variable will perform 25/5
    document.getElementById("divide").innerHTML = "25 / 5 = " + simple_Math; //tell html to print answer
}

function more_Math() { // define function for multiple operators function
    var simple_Math = (1 + 2) * 10 / 2 - 5; //what operations the variable will perfrom
    document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10, divided in half, subtracted by 5 equals " + simple_Math; //display result in html
}

function modulus_Operator() { //define remainder operator function
    var simple_Math = 25 % 6; //perform 25/6 and find remainder
    document.getElementById("remainder").innerHTML = "25 divided by 6 has a remainder of: " + simple_Math; //display result in html
}

function negation_Operator() { //define negation operator function
    var x = 10; //define variable
    document.getElementById("negate").innerHTML = -x; //tell variable to negate itself and display in html
}

var x = 10; //define variable
x++; //increment variable by 1
document.write(x) //print result in html

var y = 5 //define variable
y--; //decrement variable by 1
document.write(y) //print result in html

window.alert(Math.random() * 100); //displays alert with random number b/w 1-100 in html

Math.power(10, 4); //perform 10 to the power of 4
Math.max(2, 4, 6, 8, 10); //find highest number out of numbers given