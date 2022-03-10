function get_todos() {    //gets task from input
    var todos = new Array; //creates an array of tasks that are inputed
    var todos_str = localStorage.getItem("todo");  //pulls task that was saved in web browser memory
    if (todos_str != null) {                //if input isn't null then JSON.parse
        todos = JSON.parse(todos_str);     //will tell the browser to make the task a JS object
    }
    return todos;
}

function add() {        //function adds the inputed task to the get_todos function array
    var task = document.getElementById("task").value;      //takes inputed task and creates variable of it
    var todos = get_todos();                              
    todos.push(task);   //adds new task at the end of the array
    localStorage.setItem("todo", JSON.stringify(todos));   //converts task input to a JSON string
    document.getElementById("task").value = "";
    show();
    return false;
}

function show() {     //keeps tasks permanently on screen
    var todos = get_todos();   //sets the task that was retrieved as a variable
    var html = "<ul>";      //sets each task as bullets in a ul
    for (var i = 0; i < todos.length; i++) { //displays a task to the list in the order it was inputed
        html += "<li>" + todos[i] + "<button class='remove' id='" + i + "'>x</button></li>"; //displays task as a list/creates button w "x"
    };
    html += "<ul>";
    document.getElementById("todos").innerHTML = html;  //displays task as list

    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", remove);
    };
}

function remove() {   //be able to remove a task
    var id = this.getAttribute("id");
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();

    return false;
}

document.getElementById("add").addEventListener("click", add); //displays task when add item is clicked
show(); //will keep inputs permanently on screen

