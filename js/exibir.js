function exibirNome(){
    let nome= document.getElementById ("nome").value;

    document.getElementById("saudação").textContent="Olá, " + nome +"!";
}