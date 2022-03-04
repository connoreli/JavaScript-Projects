function color_Function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color!"
    switch (colors) {
        case "Red":
            color_output = "Red" + color_string;
            break;
        case "Yellow":
            color_output = "Yellow" + color_string;
            break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output = "Blue" + color_string;
        break;
        case "Pink":
            color_output = "Pink" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as written above in the list."
    }
    document.getElementById("output").innerHTML = color_output;
}

function hello_world_function() {
    var a = document.getElementsByClassName("click");
    a[0].innerHTML = "The text changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);