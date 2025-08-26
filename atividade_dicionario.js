dicionario = {
    "andre": 10.0,
    "carol": 4,
    "luis":  7
    
}
//for para percorrer dicionarios
for( chave of Object.keys(dicionario)){
  //if para condições se o valor do dicionarios é maior ou igual a 7 
  if (dicionario[chave] >= 7){//<= siginfica maior ou igual
   console.log("O aluno", chave, "passou com nota",dicionario[chave] )
 } else {
  console.log("O aluno", chave, "reprovou")
 }    
}



let idade = {
    "paulo": 10,
    "cesar": 4,
    "Adolf": 7,
    "Hitler": 45,
    "lula": 19
};

// for para percorrer o dicionário e mostrar apenas os nomes
for (let chave of Object.keys(idade)) {
    console.log(chave);
}




let produtos = {
    "camisa":19,
    "calça": 79,
    "tênis": 20,
    "oculos": 25,
    "mochila": 90
};

// for e if para mostrar apenas os produtos acima de 50
for (let item of Object.keys(produtos)) {
    if (produtos[item] > 50) {
        console.log(item + " custa " + produtos[item]);
    }
}



notas = {
    "andre": 8.0,
    "adriana": 6.2,
    "ruan":  1.0,
    "vitor": 0.0,
    
}
//for para percorrer dicionarios
for( chave of Object.keys(notas)){
  //if para condições se o valor do dicionarios é maior ou igual a 7 
  if (notas[chave] >= 7){//<= siginfica maior ou igual
   console.log("O aluno", chave, "passou com nota",notas[chave] )
 } else {
  console.log("O aluno", chave, "reprovou")
 }    
}







cidade = {
    "anapolis": 10.200,
    "goias": 400.0,
    "caldas novas":  7560,
    "belo horizonte":450
    
    
    
}
//for para percorrer dicionarios
for( chave of Object.keys(cidade)){
  //if para condições se o valor do dicionarios é maior ou igual a 7 
  if (cidade[chave] >= 100.0000){//<= siginfica maior ou igual
   console.log("a cidade", chave, "passou de 100mil habitantes",cidade[chave] )
 } else {
  console.log("A cidade", chave, "reprovou na espectativas")
 }    
}





let livros = {
    "Dom Quixote": 863,
    "O Pequeno Príncipe": 96,
    "Harry Potter e a Pedra Filosofal": 320,
    "A Revolução dos Bichos": 112,
    "Senhor dos Anéis: A Sociedade do Anel": 423
};

// Percorrendo e exibindo apenas os livros com mais de 300 páginas
for (let titulo of Object.keys(livros)) {
    if (livros[titulo] > 300) {
        console.log(titulo + " tem " + livros[titulo] + " páginas");
    }
}




