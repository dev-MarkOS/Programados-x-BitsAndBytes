const result = document.querySelector('.header-result')
const finalScore = document.querySelector('.main-score')
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const getMensagem = (score) => {
    if (score >= 600) {
        return "Você tem bastante afinidade para a computação."
    }
    if (score >= 300) {
        return "Você tem afinidade para a computação."
    }
    if (score < 300) {
        return "Você não tem afinidade para a computação"
    }
    return "Você"
}

finalScore.innerText = mostRecentScore

result.innerText = getMensagem(mostRecentScore)