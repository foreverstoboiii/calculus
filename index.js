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
const savedTheme = localStorage.getItem('theme');

// При загрузке страницы устанавливаем тему из localStorage
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    togglebutton.textContent = '🌙'; // показываем иконку тёмной темы
} else {
    // по умолчанию светлая тема
    document.body.classList.remove('dark-mode');
    togglebutton.textContent = '🔆'; // иконка светлой темы
}

togglebutton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        togglebutton.textContent = '🌙'; // Тёмная тема активна
        localStorage.setItem('theme', 'dark'); // сохраняем выбор
    } else {
        togglebutton.textContent = '🔆'; // Светлая тема активна
        localStorage.setItem('theme', 'light'); // сохраняем выбор
    }
});

//функция для переключение тем 


