const calculator = {                //creates object to keep track of values
    Display_Value: "0",           //this displays 0 on screen
    First_Operand: null,          //this will hold first operand for any expressions to null for now
    Wait_Second_Operand: false,  //checks whether the 2nd operand has been input
    operator: null,             //hold operator to null for now
};

function Input_Digit(digit) {      //modifies values each time a button is clicked
    const { Display_Value, Wait_Second_Operand } = calculator;     
    if (Wait_Second_Operand === true) {                //checking to see if Wait_Second_Operand is true
        calculator.Display_Value = digit;             //set display_value to the key that was clicked
        calculator.Wait_Second_Operand = false;      
    } else {
        calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;  //overwrites display_value if current value is 0, otherwise adds onto it
   }
}

function Input_Decimal(dot) {    //handles decimal points
    if (calculator.Wait_Second_Operand === true) return;  //ensures accidental clicking doesn't cause bugs
    if (!calculator.Display_Value.includes(dot)) {       //if display_value doesn't contain a decimal point, add a decimal point
        calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) {   //function handles operators
    const { First_Operand, Display_Value, operator } = calculator   //when an operator key is pressed, we convert current number
    const Value_of_Input = parseFloat(Display_Value);              //displayed on the screen to a number and then store result in
    if (operator && calculator.Wait_Second_Operand) {             //Calculator.First_Operand if it doesn't already exist
        calculator.operator = Next_Operator;         //checks if operator already exists and if Wait_Second_Operand is true,
        return;                                     //then updates operator and exits from function
    }
    if (First_Operand == null) {
        calculator.First_Operand = Value_of_Input;
    } else if (operator) {               //checks if operator already exists
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); //if operator exists, property lookup is performed for
        result = Number(result).toFixed(9) //add a fixed number of #'s after decimal //the operator in the Perform_Calculation object
        result = (result * 1).toString()//remove trailing 0's                //and the function that matches the operator is executed
        calculator.Display_Value = parseFloat(result);
        calculator.First_Operand = parseFloat(result);
    }
    calculator.Wait_Second_Operand = true;
    calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    calculator.Display_Value = "0";
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand = false;
    calculator.operator = null;
}

function Update_Display() {   //updates screen with contents of display_value
    const display = document.querySelector(".calculator-screen");
    display.value = calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")) {   //ensures AC clears calculator
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})