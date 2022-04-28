const btnMoney = document.getElementById('btn-change');
const body = document.getElementById('body');
const color = document.getElementById("color");


color.addEventListener( 'keyup' , (event) => {
    if (event.key=== "Backspace") {
        document.body.style.backgroundColor = 'white'
    }
})

btnMoney.addEventListener("click", () => {
    console.log(`#${color.value}`);
    document.body.style.backgroundColor = `#${color.value}`;
});
