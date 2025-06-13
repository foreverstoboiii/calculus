function appendValue(symbol) {
    let display = document.getElementById("display")
    display.value += symbol;
}
//функция для дисплея 

function calculate() {
    let display = document.getElementById('display');
    let result = eval(display.value);
    display.value = result;
}
//функция с eval() которая считает все что на дисплее
function clearDisplay() {
    document.getElementById('display').value = '';
}
//функция для очистки дисплея 