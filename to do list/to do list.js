const input = document.querySelector(".input-box");
const addBtn = document.querySelector(".text");
const list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
    const textValue = input.value;

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textContainer = document.createElement("p");
    textContainer.textContent = textValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(textContainer);
    itemContainer.appendChild(deleteBtn);

    list.appendChild(itemContainer);
});