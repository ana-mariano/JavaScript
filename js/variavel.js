function exemploVar(){
    if(TRUE){
        //Definir as variaveis
        var x=10;
        let y=20;
        const z=30;
    }

    console.log(x); // Acessivel
    console.log(y); //Erro: Y não está definido
    console.log(z); //Erro: Z não está definido
}