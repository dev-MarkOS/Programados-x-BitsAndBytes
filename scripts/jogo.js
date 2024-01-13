const question = document.querySelector('.header-question');
const choices = Array.from(document.querySelectorAll('.choice-text'));

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

let score = 0;
let availableQuestions = []
let acceptingAnswers = true
let currentQuestion = {}
let questionCounter = 0

let questions = [
    {
        title: "Em qual área da tecnologia você gostaria ou você tem interesse de trabalhar ?",
        choicesQuestion: [
            { option: "Produtos e invenções tecnológicas", score: 100 },
            { option: "Facilidade de segmentar e automizar dados, pessoas e processos", score: 100 },
            { option: "Soluções para o nosso dia a dia", score: 50 },
            { option: "Não tenho interesse nessa área", score: 0 }
        ],
    },
    {
        title: "O que você gosta de fazer no seu tempo livre ?",
        choicesQuestion: [
            { option: "Estudar", score: 100 },
            { option: "Ler", score: 50 },
            { option: "Ficar no computador", score: 25 },
            { option: "Dormir", score: 0 }
        ],
    },
    {
        title: "Você está em um projeto e se depara com alguma dificuldade, você:",
        choicesQuestion: [
            { option: "Analisa a situação e já traça modos de como resolvê-la", score: 100 },
            { option: "Desiste por causa da dificuldade", score: 0 },
            { option: "Procrastina o quanto pode para depois resolver", score: 25 },
            { option: "Delego pra alguém mais capacitado", score: 50 }
        ],
    },
    {
        title: "Com relação a tecnologia, você costuma:",
        choicesQuestion: [
            { option: "Estar sempre atualizado, buscando novos lançamentos e novidades", score: 100 },
            { option: "De vez em quando procuro as novidades", score: 50 },
            { option: "Só procura entender algo novo se necessário", score: 25 },
            { option: "Não me interesso nas novidades e lançamentos novos", score: 0 }
        ],
    },
    {
        title: "Você se considera alguém que se atenta muito mesmo aos pequenos detalhes ?",
        choicesQuestion: [
            { option: "Não, sou uma pessoa muito distraída", score: 0 },
            { option: "Um pouco, raramente me preocupo com pequenos detalhes", score: 25 },
            { option: "Na maioria das vezes me atento à todos os detalhes", score: 50 },
            { option: "Não deixo passar, sempre me atento a todos os detalhes", score: 100 }
        ],
    },
    {
        title: "Quando você estuda exatas. É fácil usar números, símbolos numéricos e fórmulas ?",
        choicesQuestion: [
            { option: "Não, acho muito díficil", score: 0 },
            { option: "Não sou bom com as áreas de exatas, mas faço o melhor possível para passar nas provas.", score: 25 },
            { option: "Sim, esforçando-me nos estudos", score: 50 },
            { option: "Sim, aprendo rapidamente", score: 100 }
        ],
    },
    {
        title: "Ao realizar um trabalho, projeto ou algo do tipo, você sente que pode melhorar o que já foi feito ?",
        choicesQuestion: [
            { option: "Não, só faço o mínimo para não parecer algo mal feito", score: 0 },
            { option: "Um pouco, há vezes que sinto que poderia fazer mais", score: 25 },
            { option: "Sim, na maioria das vezes sinto que posso melhorar ainda mais", score: 50 },
            { option: "Sempre, sempre estou ansioso por melhorar o que já foi feito ou o que será feito", score: 100 }
        ],
    },
    {
        title: "Você tem curiosidade em relação a como as coisas são feitas e tem interesse em fazer?",
        choicesQuestion: [
            { option: "Sempre busco conhecer as coisas por trás das cortinas e aprender como fazer", score: 100 },
            { option: "Gosto muito de ver como são feitas", score: 50 },
            { option: "Já vi algumas vezes mas não tenho grande interesse", score: 25 },
            { option: "Não gosto, minha atenção só é atraída pelo resultado", score: 0 }
        ],
    },
    {
        title: "O quão centrado e organizado você é ?",
        choicesQuestion: [
            { option: "Muito organizado", score: 100 },
            { option: "Organizado para algumas coisas", score: 50 },
            { option: "Pouco organizado", score: 25 },
            { option: "Não sou organizado", score: 0 }
        ],
    },
    {
        title: "Com relação à lógica, você:",
        choicesQuestion: [
            { option: "Gosta de pensar bastante e procurar soluções para os problemas", score: 100 },
            { option: "Pensa em soluções simples, mas não tão efetivas", score: 50 },
            { option: "Pensa um pouco, mas logo desiste de procurar uma solução para o problema", score: 25 },
            { option: "Nem tento", score: 0 }
        ],
    },
]

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedIndex = selectedChoice.dataset['number'] - 1

        incrementScore(currentQuestion[selectedIndex].score)

        setTimeout(() => {
            getNewQuestion()
        }, 400)
    })
})

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        window.location.href = 'end.html'
        return;
    }

    questionCounter++
    //progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`
    //progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    /**Logica que define as questões */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    console.log(availableQuestions)
    const { title, choicesQuestion } = availableQuestions[questionsIndex]

    question.innerText = title

    let choicesAvailable = choicesQuestion

    var choicesShuffled = []
    while (choicesAvailable.length > 0) {
        const choicesIndex = Math.floor(Math.random() * choicesAvailable.length)
        choicesShuffled.push(choicesQuestion[choicesIndex])
        choicesAvailable.splice(choicesIndex, 1)
    }

    questionChoices = choicesShuffled
    currentQuestion = choicesShuffled

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = questionChoices[number - 1].option
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

function startGame() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

incrementScore = num => {
    score += num
    //scoreText.innerText = score
    console.log(score)
}

startGame()
