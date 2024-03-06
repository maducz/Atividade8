function somar() {
    let num1;
    let num2;
    let result;
    num1=15;
    num2=8;
    result=num1+num2;

    document.getElementById("resultado").innerHTML=result;
}
function sortear() {
    let aleat;
    aleat=Math.floor(Math.random()*11);

    document.getElementById("numero_sorteado").innerHTML=aleat;
}