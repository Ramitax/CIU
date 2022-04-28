const button = document.getElementById('beep');
const body = document.getElementById('body');


const seEjecutaEnEvento = () => {
    body.insertAdjacentHTML("beforeend", `<p class="fw-bold fs-5 text-center">BEEP!</p>`);
    body.classList.toggle('color');
}
button.addEventListener("click", seEjecutaEnEvento);