function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');

    if (!container) {
        console.error("Elemento container não encontrado!");
        return;
    }

    let cartao = document.createElement('article');
    cartao.className = 'cartao';  // Correção de classeName para className
    
    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;
    
    // Definir uma variável para controlar o estado do cartão
    let respostaEstaVisivel = false;

    // Função para virar o cartão
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel); // Adiciona ou remove a classe 'active'
    }

    cartao.addEventListener('click', viraCartao); // Adiciona o evento de click ao cartão

    container.appendChild(cartao); // Adiciona o cartão ao container
}
