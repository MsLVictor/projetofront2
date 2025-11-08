window.onload = function(){
    let mensagens = obterMensagens();
    let usuarioLogado = this.localStorage.getItem("usuarioLogado")

    if(!usuarioLogado) {
        alert("Você precisa fazer o login para acessar essa página.")
        window.location.href = "admin.html";
    }

    if (!mensagens) mensagens = [];

    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    mostrarMensagens(mensagens);
};

function mostrarMensagens(lista){
    let tabela = document.querySelector("#tabelaMensagens tbody")
    tabela.innerHTML = "";

    lista.forEach(function(msg, i){
        let linha = document.createElement("tr");

        let visualizadas = JSON.parse(localStorage.getItem("visualizadas")) || [];

        let lida = visualizadas.includes(msg.email + msg.mensagem);

        if (!lida) {
            linha.classList.add("naoLida");
        }

        linha.innerHTML = `
            <td>${msg.nome}</td>
            <td>${msg.email}</td>
            <td>${msg.mensagem}</td>
        `;

        linha.addEventListener("click", function(){
            linha.classList.remove("naoLida");
            salvarComoLida(msg);
        });

        tabela.appendChild(linha);

    });
};

function salvarComoLida(msg) {
  let visualizadas = JSON.parse(localStorage.getItem("visualizadas")) || [];
  let idMensagem = msg.email + msg.mensagem;

  if (!visualizadas.includes(idMensagem)) {
    visualizadas.push(idMensagem);
    localStorage.setItem("visualizadas", JSON.stringify(visualizadas));
  }
}   


function atualizarMensagens() {
    let mensagens = obterMensagens();
    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    mostrarMensagens(mensagens);
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "admin.html";
}