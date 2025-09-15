<html>
<head>
    <title>Validar User</title>
</head>
<body>
    <input type="text" id="user" placeholder="Usuário">
    <input type="password" id="senha" placeholder="Senha">
    <button onclick="validaruser()">Entrar</button>

    <script>
        function validaruser() {
            let dict_senhas = {
                "user": "user123",
                "pedro": "@123",
                "felipe": "#@456"
            };
            
            let usuario = document.getElementById("user").value;
            let senha = document.getElementById("senha").value;
            
            if (dict_senhas[usuario] && dict_senhas[usuario] === senha) {
                alert("Usuário e senha corretos ✅");
            } else {
                alert("Usuário ou senha incorretos ❌");
            }
        }
    </script>
</body>
</html>
