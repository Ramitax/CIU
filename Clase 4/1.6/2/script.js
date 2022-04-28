const img = document.querySelector("img");
const body = document.querySelector("body");
let sePresionoClick = false;
const callback = (event) => {
    img.style.left = `${event.pageX}px`;
    img.style.top = `${event.pageY}px`;
};
// body.addEventListener("mousemove", callback); // Parte 1
body.addEventListener("drag", callback); // Parte 2