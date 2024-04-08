let listaDeNumerosSorteados = []
let numeroLimite = 10
let numerosecreto = gerarNumeroAleatorio();
let tentativa = 1

function exibirTextoNaTela(tag, texto){
let elemento = document.querySelector(tag);
elemento.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function frasesnaTela() {
    exibirTextoNaTela('h1', "Jogo do número secreto!");
    exibirTextoNaTela('p', "Escolha um número entre 1 a 10");
} 

frasesnaTela()

function gerarNumeroAleatorio() {
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

if (quantidadeDeElementosNaLista==10){
    listaDeNumerosSorteados = []
}

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
    
}

function botaoClicado(){
    let mensagemTentativa = tentativa > 1 ? " tentativas" : " tentativa"
    let chute = document.querySelector('input').value
        if (chute == numerosecreto){
            exibirTextoNaTela('h1', "Acertou!")
            exibirTextoNaTela('p', "Parabéns! você acertou com "+ tentativa + mensagemTentativa)
            document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
            if (chute>numerosecreto){
                exibirTextoNaTela('p', "O número é menor")
            } else{
                exibirTextoNaTela('p', "O número é maior")
            }
        }
        tentativa++
        LimparCampoInput()
    console.log('botão clicado')
    console.log (chute==numerosecreto)
}

function LimparCampoInput (){
    chute = document.querySelector('input')
    chute.value = ""
    
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio()
    LimparCampoInput()
    tentativa = 1
    frasesnaTela()

    
}
