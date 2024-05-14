var btn = document.querySelector(".btn");
var cor= false;

btn.addEventListener("click", trocarCor);

function trocarCor() {
    if (cor) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
    cor = !cor;//inverte a booleana
}
