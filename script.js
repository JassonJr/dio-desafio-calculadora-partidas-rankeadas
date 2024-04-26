let vitorias = 0
let derrotas = 0
let nivel
let saldoVitorias = 0

function calculaElo (vitoria, derrota) {
    saldoVitorias = vitoria - derrota

    if(saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias > 10 && saldoVitorias < 21) {
        nivel = "Bronze"
    } else if (saldoVitorias > 20 && saldoVitorias < 51) {
        nivel = "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário"
    } else if (saldoVitorias > 100) {
        nivel = "Imortal"
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}

//Laço de repetição para acrescentar vitórias e derrotas, com o intuito de mostrar todos os níveis de Elo.
while (saldoVitorias < 101) {
    vitorias += 11
    derrotas += 5

    calculaElo(vitorias, derrotas)
}
