let activePlayer = "X";    // whos turn is it
let selectedSquares = []; //stores an array of moves that determines win conditions

function placeXOrO(squareNumber) {   //placing x/o in square
    if (!selectedSquares.some(element => element.includes(squareNumber))) { //ensures hasn't been selected already
        let select = document.getElementById(squareNumber);   //some method checks selectedSquare array, retrieve html id that was clicked
        if (activePlayer === "X") {     //condition to check whos turn is it
            select.style.backgroundImage = "url('./images/x.png')" //place image if activePlayer is X
        } else {
            select.style.backgroundImage = "url('./images/o.png')" //if not X, place O image
        }
        selectedSquares.push(squareNumber + activePlayer); //concatenate and put squareNumber & activePlayer into an array
        checkWinConditions();  //check for any win conditions
        if (activePlayer === "X") {  //condition for changing active player
            activePlayer = "O";     //if activePlayer is X, change to O
        } else {                   //if not, change activePlayer to X
            activePlayer = "X";
        }
        audio('./media/place.mp3')   //placement sound
        if (activePlayer === "O") { //checks to see if it's computer's turn
            disableClick();        //disables clicking for computer choice
            setTimeout(function () { computersTurn(); }, 1000)        //waits 1 second before comp places image & enables click
        }
        return true; //needed for computersTurn() to work
    }
    function computersTurn() {  //random square selected by comp
        let success = false;   //boolean needed for while loop
        let pickASquare;      //stores a random # 1-8
        while (!success) {   //keep trying if a square is already selected
            pickASquare = String(Math.floor(Math.random() * 9)); //picks random # 1-8
            if (placeXOrO(pickASquare)) {     //if returned true = square is available
                placeXOrO(pickASquare);      //call function
                success = true;             //change boolean and end loop
            };
        }
    }
}

function checkWinConditions() {  //parses the selectedSquares array looking for these win condtions
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }   //drawWinLine shows who won and where they got ttt
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {  //if 9 turns have been played and none of the above conditions meet, it is a tie
        audio("./media/tie.mp3");           //tie game sound
        setTimeout(function () { resetGame(); }, 1000);  //sets a .3 second timer before the resetGame is called
    }
    function arrayIncludes(squareA, squareB, squareC) {  //check for each win condition, if an array has 3 strings
        const a = selectedSquares.includes(squareA)     //used to check for 3 in a row
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) { return true } //if all 3 variables pass, true is returned and drawWinLine executes
    }
}

function disableClick() {     //makes body element unclickable temporarily
    body.style.pointerEvents = "none";  //makes body unclickable
    setTimeout(function() { body.style.pointerEvents = "auto"; }, 1000) //makes body clickable again after 1 second
}

function audio(audioURL) {  //function takes string parameter for placement sound
    let audio = new Audio(audioURL); //create new audio and pass the path as a parameter
    audio.play(); //plays audio sound
}
    
function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //draws win lines using html canvas
    const canvas = document.getElementById("win-lines")   //accesses html canvas element
    const c = canvas.getContext("2d");                   //line gives access to methods and properties to use on canvas
    let x1 = coordX1,         //where the start of a lines x-axis is
        y1 = coordY1,        //where the start of a lines y-axis is
        x2 = coordX2,       //end of lines x-axis
        y2 = coordY2,      //end of lines y-axis
        x = x1,           //stores temporary x-axis that we update in our animation loop
        y = y1;          //stores temporary y-axis that we update in our animation loop
    function animateLineDrawing() {   //interacts w canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);    //creates loop
        c.clearRect(0, 0, 608, 608)      //clears content from last iteration
        c.beginPath();                  //starts new path
        c.moveTo(x1, y1)               //moves to starting point for line
        c.lineto(x, y)                //indicates endpoint of line
        c.lineWidth = 10;            //sets width of line
        c.strokeStyle = "rgba(70, 255, 33, .8)";  //sets color of line
        c.stroke();                 //draws everything we just coded ^^^
        if (x1 <= x2 && y1 <= y2) {  //checks if we reached endpoint
            if (x < x2) { x += 10; }  //adds 10 to previous x point
            if (y < y2) { y += 10; } //adds 10 to previous y point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }    //cancels animation loop if endpoint is reached
        }
        if (x1 <= x2 && y1 >= y2) {    //necessary for 6, 4, 2 win condition
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    function clear() {    //clears canvas after winLine is drawn
        const animationLoop = requestAnimationFrame(clear);    //starts animation loop
        c.clearRect(0, 0, 608, 608);                          //clears canvas
        cancelAnimationFrame(animationLoop);                 //stops animation loop
    }
    disableClick();       //disables click while win audio is playing
    audio("./media/winGame.mp3");       //plays win sound
    animateLineDrawing();              //calls animation loop
    setTimeout(function() { clear(); resetGame(); }, 1000);   //wait 1 sec, clears canvas, resets game, allows clicking again
}

function resetGame() {   //function resets game in event of a tie or win
    for (let i = 0; i < 9; i++) {    //iterates through each html element
        let square = document.getElementById(String(i))   //gets html element "i"
        square.style.backgroundImage = ""   //removes background image
    }
    selectedSquares = []; //resets array so we can start over
}
