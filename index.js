let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let resultDisplayed = false;  
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText == '=') {
            string = eval(string);
            input.value = string;
            resultDisplayed = true;  
        } else if (buttonText == 'AC') {
            string = "";
            input.value = string;
            resultDisplayed = false;  
        } else if (buttonText == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            if (resultDisplayed) {
            string = buttonText;
                resultDisplayed = false;  
            } else {
                string += buttonText;
            }
            input.value = string;
        }
    });
});
