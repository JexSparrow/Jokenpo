const GAME_OPTIONS = { // ENUMS

    PEDRA: 'rock',
    PAPEL: 'paper',
    TESOURA: 'scissors'
}

const result = document.querySelector(".result") // paragrafo que mostra quem venceu ou empatou
const yourScore = document.querySelector("#your-score-number") // span jogador
const machineScore = document.querySelector("#machine-score-number") // span maquina

let yourPoints = 0 // somar os pontos - jogador
let machinePoints = 0 // somar os pontos - maquina

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

    const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA] // 3 escolhas
    const randomChoice = (Math.floor(Math.random() * 3)) // numero aleatorio entre 0 e 1 , arredondado para baixo * 3


    return choices[randomChoice] // guardar o resultado do randomChoice
}

const playTheGame = (human, machine) => { // escolha do humano e máquina

    console.log("Humano: "  + human + " // " + "Máquina: " + machine)

    if (human === machine) {

        result.innerHTML = "Deu Empate" // alterar parágrafo

    } else if (
        (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) || // pedra > tesoura
        (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||    // papel > pedra
        (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)   // tesoura > papel
    ) {
        yourPoints++    // adiciona +1
        yourScore.innerHTML = yourPoints // somando pontos

        result.innerHTML = "Você ganhou" // alterar paragrafo

    } else {

        machinePoints++ // adiciona +1
        machineScore.innerHTML = machinePoints // somando pontos

        result.innerHTML = "Você perdeu para a Alexa!"
    }



}



