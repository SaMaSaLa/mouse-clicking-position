let otherSpace = document.getElementById("other-space");
let xValueEl = document.getElementById("x-position-value");
let yValueEl = document.getElementById("y-position-value");

let xYPosition = (e) => {
    xValueEl.textContent = e.offsetX;
    yValueEl.textContent = e.offsetY;
};

otherSpace.addEventListener("click", xYPosition);
