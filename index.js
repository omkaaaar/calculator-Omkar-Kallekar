let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let resultDisplayed = false;  // This flag will indicate if the result is currently displayed
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText == '=') {
            string = eval(string);
            input.value = string;
            resultDisplayed = true;  // Set the flag to true after displaying the result
        } else if (buttonText == 'AC') {
            string = "";
            input.value = string;
            resultDisplayed = false;  // Reset the flag
        } else if (buttonText == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            if (resultDisplayed) {
                // If the result is displayed and a number is pressed, start a new expression
                string = buttonText;
                resultDisplayed = false;  // Reset the flag
            } else {
                string += buttonText;
            }
            input.value = string;
        }
    });
});
