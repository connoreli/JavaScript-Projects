document.write(typeof 3); //type of operator
document.write("10" + 5); //type coercion

function NaN_function() {  //define function name
    document.getElementById("NaN").innerHTML = 0 / 0;   //display if 0/0 is NaN in HTML
    document.getElementById("NaN-yes").innerHTML = isNaN('This is a string');  //example of a true NaN
    document.getElementById("NaN-no").innerHTML = isNaN(007);   //example of a false NaN
}

document.write(2E310); //display infinity
document.write(-3E410); //display -infinity
document.write(10 > 9); //display true
document.write(10 < 9); //display false

console.log(4 * 4);  //display math operation in console
console.log(10 < 9); //display false in console

document.write(10 == 5 + 5); // == true
document.write(10 == 9 * 7); // == false

x = 9
y = 9
document.write(x === y); // return true === same value and data type

a = 47
b = "I love chocolate."
document.write(a === b); // return false === diff value & data type

c = 5
d = "5"
document.write(c === d); // return false === diff data type, same value

e = "Hey, what's up?";
f = "Nothing much, how about you?";
document.write(e === f); // return false === diff value, same data type

document.write(10 > 6 && 9 < 13); // return AND operator true
document.write(8 > 6 && 5 < 5); // return AND operator false
document.write(89 > 88 || 44 < 21); //return OR true
document.write(44 > 55 || 2 > 8);  //return OR false

function not_Function() {   // define function
    document.getElementById("not").innerHTML = !(55 > 35); //return NOT false
    document.getElementById("not-2").innerHTML = !(55 < 35); //return NOT true
}