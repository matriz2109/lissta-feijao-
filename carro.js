let carro = {
    marca: "Toyota",
    modelo: "Corola",
    data: "2020",
    fabricacao: "21/09/1983"
};

console.log(carro);


carro["modelo"] = "4x4";
console.log(carro);


console.log("A marca do carro:", carro["marca"]);


delete carro["fabricacao"];
console.log(carro);


carro["cor"] = "preta";
console.log(carro);

// Métodos úteis
console.log(Object.keys(carro));    // retorna as chaves
console.log(Object.values(carro));  // retorna os valores
console.log(Object.entries(carro)); // retorna chave e valor em array
