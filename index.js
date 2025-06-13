function appendValue(symbol) {
    let display = document.getElementById("display")
    display.value += symbol;
}

function calculate() {
    let display = document.getElementById('display');
    let result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}