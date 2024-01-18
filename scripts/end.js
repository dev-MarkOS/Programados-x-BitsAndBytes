const result = document.querySelector('.header-result')
const finalScore = document.querySelector('.main-score')
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const getMensagem = (score) => {
    if (score >= 33 && score <= 40) {
        return "Sua recomendação é: Desenvolvimento de Software e aplicativos"
    }
    if (score >= 25 && score <= 32) {
        return "Sua recomendação é: Engenharia de Hardware"
    }
    if (score >= 16 && score <= 24) {
        return "Sua recomendação é: Administração de Sistemas e Redes"
    }
    if (score >= 10 && score <= 15) {
        return "Sua recomendação é: Análise de Dados"
    }
    return "O Quiz B&B estava mimindo, tente novamente!"
}

finalScore.innerText = mostRecentScore

result.innerText = getMensagem(mostRecentScore)