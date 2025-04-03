const palavras = ()=>{
    const input = document.getElementById("palavras").value;
    const strings = input.split(",").map(str => str.trim());
    const comprimentos = strings.map(str => str.length);

    document.getElementById("resultado").innerText ="Os Comprimentos são:" +comprimentos.join(", ");
}