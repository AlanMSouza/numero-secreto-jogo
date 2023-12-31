function verificaValidacao(chute) {
    const numero = +chute

    if(chuteInvalido(numero)){
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML= `
            <h2>Game Over!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
    
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
        }
    }
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML+='<div>Valor inválido!</div>'
        return
    }

    if(numeroMaiorMenor(numero)) {
        elementoChute.innerHTML+=`<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML= `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML+=`<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }else{
        elementoChute.innerHTML+=`<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})