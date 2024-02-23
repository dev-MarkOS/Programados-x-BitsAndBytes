const result = document.querySelector('.header-result')
const finalScore = document.querySelector('.main-score')
const highScores = JSON.parse(localStorage.getItem('highScores'))
const mostRecentScore = localStorage.getItem("mostRecentScore")

const getMensagem = (score) => {
    if (score >= 33 && score <= 40) {
        return "Sua recomendação é: Desenvolvimento de Software"
    }
    if (score >= 25 && score <= 32) {
        return "Sua recomendação é: Engenharia de Hardware"
    }
    if (score >= 17 && score <= 24) {
        return "Sua recomendação é: Sistemas e Redes"
    }
    if (score >= 10 && score <= 16) {
        return "Sua recomendação é: Análise de Dados"
    }
    return "Encontramos um erro, tente novamente!"
}

finalScore.innerText = mostRecentScore

result.innerText = getMensagem(mostRecentScore)


function resultadoValido() {
    // Aqui você precisa verificar se há uma pontuação válida
    // Se houver, redirecione para a página de resultados
    // Caso contrário, exiba o alerta
    var pontuacao = obterPontuacao()
  
    if (pontuacao !== null && pontuacao !== undefined && !isNaN(pontuacao)) {
      // Pontuação válida, redireciona para a página de resultados
      window.location.href = "end.html" // Substitua "resultados.html" pelo seu caminho real
    } else {
      // Pontuação inválida, exibe o alerta
      alert("Faça o teste antes de visualizar os resultados!")
    }
  }
  
  function obterPontuacao() {
    // Substitua esta função pela lógica real para obter a pontuação do jogador
    // Aqui, estou assumindo que a pontuação está armazenada em uma variável chamada 'mostRecentScore'
    const pontuacao = localStorage.getItem("mostRecentScore")
  
    // Retorna a pontuação se existir, caso contrário, retorne null ou undefined
    return pontuacao !== null ? parseInt(pontuacao) : null
  }
  
  