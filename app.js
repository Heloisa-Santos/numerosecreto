/* let titulo = document.querySelector('h1');
titulo.innerHTML = "Este é o jogo do número secreto!";
let paragrafo = document.querySelector('p'); */

function mostraTexto(tag, texto){
    let comando = document.querySelector(tag);
    comando.innerHTML = texto;
}
function iniciaJogo(){
    mostraTexto('h1',"Este é o jogo do número secreto!" );
    mostraTexto('p','Escolha um numero de 1 a 100');
    cont = 0;
    numSecreto = parseInt(Math.random()*100+1);
}

iniciaJogo()

function verificarChute(){
    let chute = document.querySelector('input').value;
    cont +=1;
    if (chute == numSecreto){
        tentativas = cont > 1 ? "tentativas" : "tentativa";
        mostraTexto('h1', `Parabéns, você acertou após ${cont} ${tentativas}`);
        mostraTexto('p',`o numero era: ${numSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if (chute > numSecreto)
            {mostraTexto('h1','você errou, o numero é menor');
            mostraTexto('p','tente novamente');
            }
        else
            {mostraTexto('h1','você errou, o numero é maior');
                mostraTexto('p','tente novamente');}
    }
    limpaCampo('input')
}

function limpaCampo(nome){
    campo = document.querySelector(nome);
    campo.value = '';
}