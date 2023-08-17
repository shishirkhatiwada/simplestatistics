// script.js
const counters = document.querySelectorAll(".counter");

function incrementCounter(counter, targetValue) {
    const currentNumber = parseInt(counter.innerText);
    const increment = targetValue / 15;

    if (currentNumber < targetValue) {
        counter.innerText = Math.ceil(currentNumber + increment);
        setTimeout(() => incrementCounter(counter, targetValue), 50);
    } else {
        counter.innerText = targetValue;
    }
}

counters.forEach(counter => {
    const targetValue = parseInt(counter.getAttribute("data-celi"));
    incrementCounter(counter, targetValue);
});
