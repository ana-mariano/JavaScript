function verificarPouI(num1){
    if (num1 % 2 === 0) {
        return "o número " + num1 + "é par.";
    }
    else {
        return "o número " + num1 + "é ímpar.";
    }
}
function verificar (){
    let num1 = parseInt(document.getElementById("num1").value);
    let resultado = verificarPouI(num1);
    document.getElementById("resultado").textContent = resultado;
}