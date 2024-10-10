const display = document.querySelector('.display');

function appendValue(value) {
    
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

let equal = document.querySelector(".equal")

equal.addEventListener("click", () => {
    try {
        let expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression);
    } catch {
        display.value = "Err";
    }
});

function clearDisplay() {
    display.value = "00";
}

let ac = document.querySelector(".ac");
ac.addEventListener("click", clearDisplay);

