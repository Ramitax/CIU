//Sin funciones 
/*
const precioOriginal = 120;
const descuento = 25;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento
})
*/
//Con funciones

function calcularDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function hicieronClick() {
    const inputPrecio = document.getElementById("inputPrecio");
    const inputPrecioValor = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const inputDescuentoValor = inputDescuento.value;

    const precioFinal = calcularDescuento(inputPrecioValor, inputDescuentoValor);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento es $" + precioFinal;
}