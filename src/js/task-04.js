const counterValueElement = document.getElementById('value');
    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');

    let counterValue = 0;

    decrementButton.addEventListener('click', () => {
      counterValue -= 1;
      counterValueElement.textContent = counterValue;
    });

    incrementButton.addEventListener('click', () => {
      counterValue += 1;
      counterValueElement.textContent = counterValue;
    });