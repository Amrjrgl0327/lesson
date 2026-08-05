const minusBtn = document.querySelector(".container > button:first-child");
const AddBtn = document.querySelector(".container > button:last-child");
const numberContainer = document.querySelector(".container h1");

let count = 0;

minusBtn.addEventListener("click", () => {
    count--;
    numberContainer.textContent = count;
});

AddBtn.addEventListener("click", () => {
    count++;
    numberContainer.textContent = count;
});