
lista_de_compra = []

lista_de_compra.push("leite")
lista_de_compra.push("monster")
lista_de_compra.push("cerveja")
lista_de_compra.push("arroz")
lista_de_compra.push("frango")

console.log(lista_de_compra)
console.log(lista_de_compra[3])

lista_de_compra.splice(1,0, "açucar")
lista_de_compra.splice(1,0, "sal")
lista_de_compra.splice(1,0, "agua")
lista_de_compra.splice(1,0, "doce")
lista_de_compra.splice(1,0, "sorvete")
console.log(lista_de_compra)

lista_de_compra.shift()

lista_de_compra.pop()
console.log(lista_de_compra)

lista_de_compra.splice(0,2)
console.log(lista_de_compra)

lista_de_compra.splice(0,4)
lista_de_compra.splice(0,1)
lista_de_compra.splice(0,2)
lista_de_compra.splice(0,5)
lista_de_compra.splice(0,3)

console.log(lista_de_compra)




