

lista = ["Banana", "Mança", "Laranja"]

console.log(lista)
console.log("Item:", lista[0])
console.log("Item:", lista[1])
console.log("Item:", lista[2])

for (indice=0; indice < lista.length; indice++){
    console.log(lista[indice], "indice:", indice)
}

/*
cria uma lista vazia (com o []) adicione 5 nomes da lista 
usando o push(), e use o comanho for para exibir cada nome
no console
A saida e para ser conforme o exemplo:
     Amigo: Ana
     Amigo: joão
     ...
*/

amigo = []

amigo.push("pedro");
amigo.push("gabriel");
amigo.push("luisa");
amigo.push("paula");
amigo.push("julia");

for (let i = 0; i < amigo.length; i++) {
  console.log("Amigo: " + amigo[i]);
}


