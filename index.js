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

const togglebutton = document.getElementById('themetoggle');

togglebutton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        togglebutton.textContent = '🌙'; // Тёмная тема активна
    } else {
        togglebutton.textContent = '🔆'; // Светлая тема активна
    }
});

//функция для переключение тем 

