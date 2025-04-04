const numbers = [...document.querySelectorAll('.num')];
const display = document.querySelector('input');
const signs = [...document.querySelectorAll('.sign')];
const dot = document.querySelector('.dot');
const clear = document.querySelector('.c');
const equal = document.querySelector('.equal'); 
const remove = document.querySelector('.r');

class Calculator {
    setDisplay(value) {
        display.value += value;
    }
    
    numbers(event) {
        let num = event.target.textContent;
        this.setDisplay(num);
    }
    
    signs(event) {
        let signView = event.target.textContent;
        this.setDisplay(signView);
    }
    
    dot() {
        if (!display.value.includes('.')) {
            this.setDisplay('.');
        }
    }
    
    clear() {
        display.value = '';
    }
    
    remove() {
        display.value = display.value.slice(0, -1);
    }
    
    equal() {
        try {
            display.value = eval(display.value); 
        } catch (error) {
            display.value = 'Error';
        }
    }
}

const calc = new Calculator();

for (const number of numbers) {
    number.addEventListener('click', (event) => calc.numbers(event));
}

for (const sign of signs) {
    sign.addEventListener('click', (event) => calc.signs(event));
}

dot.addEventListener('click', () => calc.dot());
clear.addEventListener('click', () => calc.clear());

if (remove) {
    remove.addEventListener('click', () => calc.remove());
}

if (equal) {
    equal.addEventListener('click', () => calc.equal());
}
