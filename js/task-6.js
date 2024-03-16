function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesContainer = document.getElementById(`boxes`);

function destroyBoxes() {
    boxesContainer.innerHTML = ``;
  }

  
function createBoxes(amount) {
  boxesContainer.innerHTML = ``;
   
  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.style.width = `${30 + (i * 10)}px`;
    box.style.height = `${30 + (i * 10)}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}
  
  document.querySelector(`button[data-action ="destroy"]`).addEventListener(`click`, destroyBoxes);
  document.querySelector(`button[data-action ="create"]`).addEventListener(`click`, () => {
    const amount = parseInt(document.querySelector(`input`).value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount)
      
    };
  })
