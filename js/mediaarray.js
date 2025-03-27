function calcular() {
    let input = document.getElementById("numeros").value;
    let numeros = input.split(",").map(Number); 
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    let media = soma / numeros.length;
    document.getElementById("resultado").innerText = `A média é: ${media}`;
}