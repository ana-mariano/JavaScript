function somar(){
    let n1= parseFloat(document.gerElementByld("num1").value);
    let n2= parseFloat(document.gerElementByld("num2").value);
    let soma = n1+n2;
    document.gerElementByld("resultado").textContent="Resultado: "+soma;
}