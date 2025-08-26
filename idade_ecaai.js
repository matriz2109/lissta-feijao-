idade= parseInt (prompt("Informe uma idade: "))

if (idade > 0 && idade <= 12) {
    console.log("É uma criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("É um adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("É um adulto");
} else if (idade >= 60) {
    console.log("É um idoso");
} else {
    console.log("Operação inválida");
}
