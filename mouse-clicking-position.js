let otherSpace = document.getElementById("other-space");
let xValueEl = document.getElementById("x-position-value");
let yValueEl = document.getElementById("y-position-value");
let xYPosition = (e) => {
    xValueEl.textContent = e.clientX;
    yValueEl.textContent = e.clientY;
};
otherSpace.addEventListener("click", xYPosition);
