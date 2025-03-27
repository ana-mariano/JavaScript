function calcularfatorial(){
    var num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);

    if(num1 < 0){
        document.getElementById("resultado").innerHTML = "O fatorial não existe para números negativos!!!";
        return;
    }
    var resultado = fatorial(num1);
    document.getElementById("resultado").innerHTML = "o fatorial de " + num1 + " é: " + resultado;
}
function fatorial(num1){
    if (num1 === 0){
        return 1;
    }else {
        return num1 * fatorial(num1 -1);
    }
}