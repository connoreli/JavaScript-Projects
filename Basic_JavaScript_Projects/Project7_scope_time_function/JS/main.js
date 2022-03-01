var y = 5      // global var set outside of function
function add_Numbers_1() {   //1st function
    document.write(y + 10);  //write out 5 + 10

}
function add_Numbers_2() { //2nd function
    document.write(y + 50); //write out 5 + 50
}
add_Numbers_1(); //run 1st function
add_Numbers_2(); //run 2nd function

function add_Numbers_3() {   //1st function
    x = 2                    // local variable set inside function
    document.write(x + 10);  //write out 5 + 10

}
function add_Numbers_4() { //2nd function
    console.log(x + 50); //write out 5 + 50 in console
}
add_Numbers_1(); //run 1st function
add_Numbers_2(); //run 2nd function
add_Numbers_3();
add_Numbers_4();

function get_Date() {    //define get date method
    if (new Date().getHours() < 18) {    //if our new date is before 6 pm
        document.getElementById("howdy").innerHTML = "How are you today?";  //display question in html
    }
}

x = 2022  //define x
function my_Function() { //my own if statement function
    if (x > 2021) {  //if x is less than 2021
        document.getElementById("my_Function").innerHTML = "The year is 2022";   //print in html this string
    }
}

function age_Function() {     //define function
    age = document.getElementById("age").value;   //saying age = what we input
    if (age >= 18) {
        Vote = "You are old enough to vote."      //if statement
    }
    else {
        Vote = "You are not old enough to vote." //if age >=18 is false, run else
    }
    document.getElementById("how_old_are_you?").innerHTML = Vote;  //display in html
}

function time_Function() {            // define function
    var time = new Date().getHours();   //get actual time 
    var reply;                         //define variable
    if (time < 12 == time > 0) {       //if statement - Hours 1-11 are AM
        reply = "It is morning time!"  //display string
    }
    else if (time >= 12 == time < 18) { //else if statement - 12-5 are afternoon
        reply = "It is afternoon.";     //display string
    }
    else {
        reply = "It is night time!";    //else statement - all other times are night
    }
    document.getElementById("time").innerHTML = reply; //display reply variable with string 
}