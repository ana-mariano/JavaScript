function verificarnum(){
    let num =parseFloat(document.getElementById("num").value);
    
    if(num > 0){
        resultado.textContent= 'Seu número é positivo!!'
    }else{
        resultado.textContent = 'seu número é negativo!!'
    }
}