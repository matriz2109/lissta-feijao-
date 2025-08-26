idade = document.getElementByld("idade").value
botao.addEventlistener("click",function(){
idade = parseInt(document.getElementByld("idade").value)

if (idade > 0 && idade <= 12) {
    alert("É uma criança");
} else if (idade >= 13 && idade <= 17) {
    alert("É um adolescente");
} else if (idade >= 18 && idade <= 59) {
    alert("É um adulto");
} else if (idade >= 60) {
    alert("É um idoso");
} else {
    alert("Operação inválida");
}

});
