function converter(){
    let n1= parseFloat(document.getElementById("num1").value);
    conversor= n1*1.8 +32 ;
    document.getElementById("resultado").textContent="Resultado: " +conversor;
}