
aluno = {
    nome: "Sheila Cindy",
    idade: "16",
    peso: "65.90",
    
};

console.log("For com keys");
for(chave of Object.keys(aluno)){
    console.log("A chave é",chave)
}

// Métodos úteis
console.log(Object.keys(aluno));    // retorna as chaves
console.log(Object.values(aluno));  // retorna os valores
console.log(Object.entries(aluno)); // retorna chave e valor em array
