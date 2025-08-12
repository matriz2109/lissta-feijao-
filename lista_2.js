listaCompras = ["Arroz","feijao","Macarrao","leite"]

console.log("Qtd;", listaCompras.length)

console.log("item: " , listaCompras[3])

console.log("itens: ", listaCompras)

listaCompras.push("Tenis")
item="Leite"
id = listaCompras.indexOf(item)
console.log('O id: ', id, ' e do item: ',listaCompras[id])
for(id = 0; id <= listaCompras.length-1; id++){
    console.log(listaCompras[id])
}

/*
criar uma lkista iniciando com 3 valores adiciona mais 4 itens com pushu() utilizando o console.log() mostra a quantidade de itens, imprima um item especifico, e mostre todos os itens com o for
*/





listaCompras = ["Pao","feijao","Biscoito","refrigerante"]

console.log("Qtd;", listaCompras.length)

console.log("item: " , listaCompras[3])

console.log("itens: ", listaCompras)

listaCompras.push("Sal")
listaCompras.push("açai")
listaCompras.push("agua")
listaCompras.push("suco")

item="refrigerante"
id = listaCompras.indexOf(item)
console.log('O id: ', id, ' e do item: ',listaCompras[id])
for(id = 0; id <= listaCompras.length-1; id++){
    console.log(listaCompras[id])
}
