// script.js
// Selecionar elementos que serão modificados
let listaMsgs = document.querySelector("#listaMsgs");
let txtMsg = document.querySelector("#txtMsg");
let btnEnviar = document.querySelector("#btnEnviar");

// Ações nos elementos HMTL
// ElementoVigiado.addEventoListener("evento/ação", funçãoChamadaQdoEventoOcorrer);

// Funções chamadas pelas Ações
function enviarMensagem() {
    let text = txtMsg.value;
    let html = `
        <div class="balao">${text}</div>
    `;

    listaMsgs.innerHTML += html;
}

btnEnviar.addEventListener("click", enviarMensagem);