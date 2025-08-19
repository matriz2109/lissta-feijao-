// Criando dicionário (objeto)
let pessoa = {
    nome: "André Luiz",
    idade: 29,
    cpf: 71348279522,
    nascimento: "15/09/1996"
};

// Imprimindo todos os itens
console.log(pessoa);

// Atualizando item idade
pessoa["idade"] = 30;
console.log(pessoa);

// Acessando um item específico
console.log("Meu nome é:", pessoa["nome"]);

// Deletando um item do dicionário
delete pessoa["nascimento"];
console.log(pessoa);

// Adicionando um novo item no dicionário
pessoa["raca"] = "preta";
console.log(pessoa);

// Métodos úteis
console.log(Object.keys(pessoa));   // retorna as chaves
console.log(Object.values(pessoa)); // retorna os valores
console.log(Object.entries(pessoa)); // retorna chave e valor em array
