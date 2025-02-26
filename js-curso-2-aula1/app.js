let listaNumerosGerados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Bingo!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('h1', 'Errou!');
            exibirTexto('p', 'O número secreto é menor!');
        } else {
            exibirTexto('h1', 'Errou!');
            exibirTexto('p', 'O número secreto é maior!');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroSecreto() {
    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    let quantidadeNumerosGerados = listaNumerosGerados.length;

    if (quantidadeNumerosGerados == 10) {
        listaNumerosGerados = [];
    }
    if (listaNumerosGerados.includes(numeroSecreto)) {
       return gerarNumeroSecreto();
    } else {
        listaNumerosGerados.push(numeroSecreto);
        console.log(listaNumerosGerados);
        return numeroSecreto;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}  

    
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

// exibirTexto('h1', 'Jogo do Número Secreto');
// exibirTexto('p', 'Escolha um número entre 1 e 100');
