
 /*
      Entendendo funções
 */
 //Criando a função
 function somar(){
     //Instrunções a serem executadas
     soma = 2 + 2;
     console.log("Rsultado da doma é: ", soma)
     console.log("Exibindo mais coisa...\n")
 }
 //executnando a função
 somar();
 
 
 
 
 
 
 
 
 
 
 
 
 
 //ATIVIDADE 1
  function somas(){
     //Instrunções a serem executadas
     soma = 2 + 20;
     console.log("Rsultado da doma é: ", soma)
     console.log("Exibindo mais coisa...\n")
 }
 //executnando a função
 somas();
 somas();
 
 
 
 //2
 function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}


verificarParOuImpar(10); 
verificarParOuImpar(7);  


//3    
    

    function Idade(idade) {
    if (idade >= 18) {
        console.log("A pessoa tem " + idade + " anos e é maior de idade.");
    } else {
        console.log("A pessoa tem " + idade + " anos e é menor  de idade.");
    }
}


Idade(20);  
Idade(15);  

    
    
//4
 function multiplicar(n1, n2) {
    let resultado = n1 * n2;

    if (resultado > 10) {
        console.log("O resultado é " + resultado + " e é maior que 10.");
    } else {
        console.log("O resultado é " + resultado + " e é menor ou igual a 10.");
    }
}

multiplicar(2, 3);   
multiplicar(5, 4);   






//5
function rMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;

    if (media >= 7) {
        console.log("Média = " + media.toFixed(2) + " Aprovado");
    } else {
        console.log("Média = " + media.toFixed(2) + " eprovado");
    }
}


rMedia(8, 9, 9);  // Média = 6.67 → Reprovado
rMedia(0, 0, 1);  // Média = 5.00 → Reprovado
rMedia(9, 8, 10); // Média = 9.00 → Aprovado








