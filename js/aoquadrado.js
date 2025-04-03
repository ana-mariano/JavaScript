const quadrado = () =>{
    let input = document.getElementById("numeros").value;
    let array = input.split(",").map(item => parseFloat(item.trim())); 
    let quadrado = array.map((item) => item * item);
    document.getElementById("resultado").innerText = "Array com os números elevados ao quadrado: " + quadrado.join(", ");
}