window.onload = function(){
    let form = document.getElementById("formLogin");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let email =document.getElementById("email").value.trim();
        let senha = document.getElementById("senha").value.trim();

        let objLoginSenha = {
            email: email,
            senha: senha
        };

        let valido = validarUsuario(objLoginSenha);

        if (valido === true) {
            localStorage.setItem("usuarioLogado", objLoginSenha.email);
            
            window.location.href = "mensagens.html";
        } else {
            alert("Email ou senha incorretos!")
        }
    });
};