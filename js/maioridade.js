const filtrar = () => {
    let nomes = document.getElementById("nomes").value.split(",").map(n => n.trim());
    let idades = document.getElementById("idades").value.split(",").map(i => parseInt(i.trim()));

    let listaMaiores = document.getElementById("ListaMaiores");
    listaMaiores.innerHTML = ""; 

    if (nomes.length !== idades.length) {
        alert("O número de nomes e idades não coincide!");
        return;
    }

    let maiores = nomes.filter((nome, i) => idades[i] > 18);

    if (maiores.length === 0) {
        let item = document.createElement("li");
        item.textContent = "Nenhuma pessoa maior de 18 anos foi encontrada.";
        listaMaiores.appendChild(item);
    } else {
        maiores.forEach((nome, i) => { 
            if (idades[i] > 18) { 
                var item = document.createElement("li");
                item.textContent = nome + " - " + idades[i] + " anos"; 
                listaMaiores.appendChild(item); 
            }
        });
    }
}