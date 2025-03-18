function appendValue(value) {
    document.getElementById('display').value += value;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function calculeteResult(){
    try{
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch{
        document.getElementById('display').value ='Erro';
    }
}