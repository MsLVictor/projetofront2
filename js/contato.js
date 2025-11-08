
window.onload = function(){
    let botaoEnviar = document.getElementById("button");

    botaoEnviar.addEventListener("click", function(){

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let msg = document.getElementById("mensagem").value;

        if (nome === "" || email === ""|| msg === ""){
            alert("Preencha todos os campos para envio da mensagem!")
            return;
        }

        var mensagem1 = {
            nome: nome,
            email: email,
            mensagem: msg
        }

        
        inserirMensagem(mensagem1);
    })
}