function ride_Function() {   //define function
    var height, can_Ride;    //define variables we're going to use
    height = document.getElementById("height").value; //height = what is value inputted
    can_Ride = (height < 52) ? "You are too short" : "You are tall enough"; //ternary operator tells us if they're tall enough based off if they're over 52 cm
    document.getElementById("ride").innerHTML = can_Ride + " to ride."; //display if they can ride or not
}

function vote_Function() { //define function
    var age, can_Vote;  //define variables
    age = document.getElementById("age").value; //assign what value is inputted to variable age
    can_Vote = (age < 18) ? "You are too young" : "You are old enough"; //ternary operator does math
    document.getElementById("vote").innerHTML = can_Vote + " to vote."; //display if they can vote or not
}

function Vehicle(Make, Model, Year, Color) {    //constructor function
    this.vehicle_Make = Make;  //define object 1-4
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //1st example
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //2nd example
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //3rd example
function my_Function() {   //function using new and this
    document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.vehicle_Color + "-colored "
        + Erik.vehicle_Model + " manufactured in " + Erik.vehicle_Year;   //tell html to print Erik example
}

function count_Function() {  //define main function  
    document.getElementById("nested_Function").innerHTML = Count(); //connect to p element in html
    function Count() {  //define nested function
        var starting_Point = 4;  //define starting point
        function plus_One() { starting_Point += 1; } //another nested function 
        plus_One();   // add 1
        return starting_Point;  //return result = 5
    }
}