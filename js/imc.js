function calcular(){
    let n1= parseFloat(document.getElementById("peso").value);
    let n2= parseFloat(document.getElementById("altura").value);
    calculo = n1 / (n2 * n2);
    document.getElementById("resultado").textContent="Resultado: " + calculo;
}