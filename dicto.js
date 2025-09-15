dict_senhas = {
    "user":"user123",
    "pedro":"@123",
    "felipe": "#@456"
}

usuario = prompt("imforme o usuario");
senha = prompt("informe a senha  ");


console.log(dict_senhas["felipe"]);

console.log("usuario",usuario,"senha",senha);


if (dict_senha[usuario]&& dict_senhas[usuario]===senha){
    console.log("usuariocorret")
}else{
    console.log("usuario incorret")
}
