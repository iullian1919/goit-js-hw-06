document.addEventListener("DOMContentLoaded", () => {
  const controls = document.getElementById("controls");
  const boxesContainer = document.getElementById("boxes");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const input = controls.querySelector("input");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const size = 30 + 10 * i;
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  createButton.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    if (!isNaN(amount)) {
      createBoxes(amount);
    }
  });

  destroyButton.addEventListener("click", () => {
    destroyBoxes();
  });
});
