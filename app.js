
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.classeName = 'cartao'
    
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
    `
    let respostaEstaVisivel = false
    container.appendChild(cartao)
}

function viraCartao (){
    respostaEstaVisivel = !respostaEstaVisivel
}