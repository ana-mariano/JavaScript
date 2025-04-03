const somarPares =() =>{
    let input = document.getElementById("numeros").value;
    let numeros =input.split(",").map(Number);
    let soma = 0;

for (let i =0; i<numeros.length; i++){
    if(numeros[i] %2 ==0){
        soma += numeros[i];
    }else{}
}
document.getElementById("resultado").innerText = "a soma dos números pares digitados é:" + soma;
}