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
