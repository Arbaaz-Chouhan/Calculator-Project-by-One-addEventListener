const mainContainer = AddCreatElement("div", "class", "mainContainer", document.body);
const Calculator = AddCreatElement("div", "class", "Calculator", mainContainer);
const Input = AddCreatElement("input", "class", "input", Calculator);
const acBtn = AddCreatElement("button", "class", "button btn", Calculator, "AC");
const delBtn = AddCreatElement("button", "class", "button btn", Calculator, "DC");
const modularBtn = AddCreatElement("button", "class", "button btn", Calculator, "%", "%");
const divideBtn = AddCreatElement("button", "class", "button btn", Calculator, "/", "/");
const seveBtn = AddCreatElement("button", "class", "button", Calculator, "7", "7");
const eightBtn = AddCreatElement("button", "class", "button", Calculator, "8", "8");
const nineBtn = AddCreatElement("button", "class", "button", Calculator, "9", "9");
const multiBtn = AddCreatElement("button", "class", "button btn", Calculator, "*", "*");
const fourBtn = AddCreatElement("button", "class", "button", Calculator, "4", "4");
const fiveBtn = AddCreatElement("button", "class", "button", Calculator, "5", "5");
const sixBtn = AddCreatElement("button", "class", "button", Calculator, "6", "6");
const subBtn = AddCreatElement("button", "class", "button btn", Calculator, "-", "-");
const oneBtn = AddCreatElement("button", "class", "button", Calculator, "1", "1");
const twoBtn = AddCreatElement("button", "class", "button", Calculator, "2", "2");
const threeBtn = AddCreatElement("button", "class", "button", Calculator, "3", "3");
const incrementBtn = AddCreatElement("button", "class", "button btn", Calculator, "+", "+");
const zeroBtn = AddCreatElement("button", "class", "button", Calculator, "0", "0");
const twpZeroBtn = AddCreatElement("button", "class", "button", Calculator, "00", "00");
const dotBtn = AddCreatElement("button", "class", "button", Calculator, ".", ".");
const equalBtn = AddCreatElement("button", "class", "eval button", Calculator, "=");



function AddCreatElement(tag, attName, attType, parent, text, value) {
    let element = document.createElement(tag);

    if (!!attName && attType) {
        element.setAttribute(attName, attType);
    }

    if (!!parent) {
        parent.append(element);
    }

    if (!!text) {
        element.innerText = text;
    }

    if (!!value) {
        element.value = value;
    }

    return element;
}

Calculator.addEventListener("click", targetEvent);

function targetEvent(event) {
    event.stopPropagation();

    let currentValue = event.target.value;

    // Check if it's a number
    if (currentValue && !isNaN(currentValue)) {
        Input.value += currentValue;
    }

    // Clear input on AC button
    if (event.target.innerText === "AC") {
        Input.value = "";
    }

    // Delete last character on DC button
    if (event.target.innerText === "DC") {
        Input.value = Input.value.slice(0, -1);
    }

    // Calculate result on "=" button
    if (event.target.classList.contains("eval")) {
        if (Input.value === "") {
            Input.value = "0";
        } else {
            try {
                Input.value = eval(Input.value);
            } catch {
                Input.value = "Error";
            }
        }
    }

    // Append operators only if last character is a number
    if (currentValue && isNaN(currentValue) && currentValue !== "AC" && currentValue !== "DC") {
        const lastChar = Input.value[Input.value.length - 1];
        if (lastChar && !isNaN(lastChar)) {
            Input.value += currentValue;
        }
    }
}

