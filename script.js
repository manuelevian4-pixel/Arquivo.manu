const formulario = document.getElementById("formRecomendacao");
const lista = document.getElementById("listaRecomendacoes");
const campoNome = document.getElementById("nome");
const campoMensagem = document.getElementById("mensagem");
const feedback = document.getElementById("feedback");

// Exibe a mensagem de confirmação
function mostrarPopup(visivel) { 
    if (visivel) {
        alert("Recomendação enviada com sucesso!");
    }
}

// Adiciona uma nova recomendação à lista (nome corrigido para addRecommendation para alinhar com a chamada)
function addRecommendation(nome, mensagem) { 
    const card = document.createElement("article");  
    card.classList.add("card");

    const texto = document.createElement("p");  
    texto.textContent = `"${mensagem}"`; 
    card.appendChild(texto);

    if (nome !== "") { 
        const autor = document.createElement("span");  
        autor.classList.add("autor");
        autor.textContent = `— ${nome}`;  
        card.appendChild(autor);
    }

    lista.appendChild(card);

    // Exibe o pop-up após adicionar a recomendação
    mostrarPopup(true);
}

// Envio do formulário
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();   
    const mensagem = campoMensagem.value.trim();   

    // Verifique se a recomendação foi preenchida
    if (mensagem === "") {  
        feedback.textContent = "Escreva uma recomendação antes de enviar.";  
        campoMensagem.focus();
        return;
    }

    // Adiciona a recomendação à página
    addRecommendation(nome, mensagem);

    // Limpar o formulário após o envio
    formulario.reset();

    // Exibe a mensagem de retorno na página
    feedback.textContent = "Recomendação adicionada com sucesso!";  
});