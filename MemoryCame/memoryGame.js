const boxes = document.querySelectorAll(".container div");

const board = [5, 1, 4, 5, 3, 4, 2, 6, 1, 2, 6, 3];

let openIndex = [];

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        if (openIndex.length < 2) {
            boxes[i].textContent = board[i];
            openIndex.push(i);
        }

        if (openIndex.length === 2) {
            const [a, b] = openIndex;

            if (board[a] === board[b]) {
                setTimeout(() => {
                    boxes[a].style.visitiblity = "hidden";
                    boxes[b].style.visitiblity = "hidden";
                    openIndex = [];
                }, 2000);

            } else {
                setTimeout(() => {
                    openIndex = [];
                    boxes[a].textContent = "";
                    boxes[b].textContent = "";
                }, 2000);
            }
        }
    });
}