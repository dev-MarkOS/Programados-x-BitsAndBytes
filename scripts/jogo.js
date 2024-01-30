const question = document.querySelector('.header-question')
const choices = Array.from(document.querySelectorAll('.btn-game'))

const MAX_QUESTIONS = 9

let score = 0
let availableQuestions = []
let acceptingAnswers = true
let currentQuestion = {}
let questionCounter = 0

let questions = [
    {
        title: "Quando se depara com um problema, você prefere:",
        choicesQuestion: [
            { option: "Encontrar soluções práticas imediatas ", score: 3 },
            { option: "Investigar a fundo a causa do problema", score: 2 },
            { option: "Escrever código para resolver o problema", score: 4 },
            { option: "Analisar dados para tomar decisões", score: 1 }
        ],
    },
    {
        title: "Qual destas áreas você acha mais fascinante:",
        choicesQuestion: [
            { option: "Redes e Sistemas", score: 2 },
            { option: "Desenvolvimento de Hardware", score: 3 },
            { option: "Desenvolvimento de Software", score: 4 },
            { option: "Análise de Dados", score: 1 }
        ],
    },
    {
        title: "Seu interesse está mais voltado para:",
        choicesQuestion: [
            { option: "Configuração de servidores e redes", score: 3 },
            { option: "Arquitetura de computadores", score: 2 },
            { option: "Linguagens de programação", score: 4 },
            { option: "Estatísticas e modelagem de dados", score: 1 }
        ],
    },
    {
        title: "O que você prefere fazer em um projeto:",
        choicesQuestion: [
            { option: "Garantir que tudo esteja funcionando perfeitamente", score: 3 },
            { option: "Projetar e construir a infraestrutura", score: 2 },
            { option: "Programar e desenvolver novas funcionalidades", score: 4 },
            { option: "Analisar dados para tomar decisões estratégicas", score: 1 }
        ],
    },
    {
        title: "Qual destas habilidades você acha mais interessante:",
        choicesQuestion: [
            { option: "Habilidades técnicas de suporte", score: 3 },
            { option: "Conhecimentos em eletrônica", score: 2 },
            { option: "Programação em diversas linguagens", score: 4 },
            { option: "Análise estatística e machine learning", score: 1 }
        ],
    },
    {
        title: "Como você descreveria seu interesse em resolver problemas:",
        choicesQuestion: [
            { option: "Prático e eficiente", score: 3 },
            { option: "Metódico e detalhado", score: 2 },
            { option: "Criativo e lógico", score: 4 },
            { option: "Estratégico e analítico", score: 1 }
        ],
    },
    {
        title: "Em qual destes ambientes você se sentiria mais confortável trabalhando:",
        choicesQuestion: [
            { option: "Em um data center", score: 3 },
            { option: "Em um laboratório de hardware", score: 2 },
            { option: "Em um escritório de desenvolvimento de software", score: 4 },
            { option: "Em um ambiente focado em análise de dados", score: 1 }
        ],
    },
    {
        title: "Ao encontrar um novo conceito técnico, como você prefere aprender sobre ele:",
        choicesQuestion: [
            { option: "Experimentando na prática", score: 3 },
            { option: "Lendo manuais e documentação", score: 2 },
            { option: "Assistindo a tutoriais em vídeo", score: 4 },
            { option: "Participando de workshops e palestras", score: 1 } 
        ],
    },
    {
        title: "O que você acha mais gratificante em um projeto:",
        choicesQuestion: [
            { option: "Ver a infraestrutura funcionando sem problemas", score: 3 },
            { option: "Observar o hardware que você projetou em ação", score: 2 },
            { option: "Ver o software que você desenvolveu em uso", score: 4 },
            { option: "Obter insights valiosos a partir da análise de dados", score: 1 }
        ],
    },
    {
        title: "Em um time de desenvolvimento, você preferiria ser responsável por:",
        choicesQuestion: [
            { option: "Suporte técnico e manutenção", score: 3 },
            { option: "Design e arquitetura de sistemas", score: 2 }, 
            { option: "Desenvolvimento e programação", score: 4 },
            { option: "Análise de dados e tomada de decisões estratégicas", score: 1 }
        ],
    },
    {
        title: "Ao se deparar com um novo conceito de programação, você prefere aprender através de:",
        choicesQuestion: [
            { option: "Tutoriais práticos e exemplos", score: 3 },
            { option: "Livros e teoria", score: 2 },
            { option: "Projetos práticos e codificação real", score: 4 },
            { option: "Aplicações práticas em projetos de análise de dados", score: 1 }
        ],
    },
    {
        title: "Como você prefere colaborar em um projeto em equipe:",
        choicesQuestion: [
            { option: "Resolvendo problemas práticos do dia a dia", score: 2 },
            { option: "Contribuindo para o design e planejamento", score: 3 },
            { option: "Escrevendo código e desenvolvendo funcionalidades", score: 4 },
            { option: "Analisando dados e fornecendo insights", score: 1 }
        ],
    },
    {
        title: "Em qual destas áreas você vê mais oportunidades de carreira:",
        choicesQuestion: [
            { option: "Administração de Redes", score: 3 },
            { option: "Desenvolvimento de Sistemas Embarcados", score: 2 },
            { option: "Desenvolvimento Web Full Stack", score: 4 },
            { option: "Ciência de Dados e Análise Preditiva", score: 1 }
        ],
    },
    {
        title: "Quando enfrenta um desafio técnico, você prefere:",
        choicesQuestion: [
            { option: "Solucionar rapidamente para manter a operação", score: 3 },
            { option: "Analisar a fundo para entender a causa raiz", score: 2 },
            { option: "Escrever código para superar o desafio", score: 4 },
            { option: "Coletar e analisar dados para compreender o problema", score: 1 }
        ],
    },
    {
        title: "Quando pensa em inovação, você imagina:",
        choicesQuestion: [
            { option: "Melhorias na infraestrutura existente", score: 3 },
            { option: "Novos dispositivos e tecnologias de hardware", score: 2 },
            { option: "Novas funcionalidades e experiências de software", score: 4 },
            { option: "Insights e descobertas transformadoras a partir de dados", score: 1 }
        ],
    },
    {
        title: "Se pudesse escolher uma área para se aprofundar, seria em:",
        choicesQuestion: [
            { option: "Virtualização e Cloud Computing", score: 3 },
            { option: "Projeto de Circuitos Eletrônicos", score: 2 },
            { option: "Desenvolvimento de Aplicações Móveis", score: 4 },
            { option: "Mineração de Dados e Big Data", score: 1 }
        ],
    },
    {
        title: "Ao lidar com um projeto, você prefere:",
        choicesQuestion: [
            { option: "Manter a infraestrutura estável e funcional", score: 3 },
            { option: "Desenvolver novos dispositivos ou componentes", score: 2 },
            { option: "Criar novas funcionalidades e melhorias de software", score: 4 },
            { option: "Extrair insights valiosos a partir dos dados disponíveis", score: 1 }
        ],
    },
    {
        title: "Qual destes termos está mais alinhado com o seu interesse:",
        choicesQuestion: [
            { option: "Firewall e Segurança de Rede", score: 3 },
            { option: "Arquitetura de Microprocessadores", score: 2 },
            { option: "Desenvolvimento de Aplicações Mobile", score: 4 },
            { option: "Ciência de Dados e Machine Learning", score: 1 }
        ],
    },
    {
        title: "Ao pensar em uma carreira a longo prazo, você se vê mais em:",
        choicesQuestion: [
            { option: "Administração de Sistemas e Redes", score: 3 },
            { option: "Engenharia de Hardware", score: 2 },
            { option: "Desenvolvimento de Software", score: 4 },
            { option: "Ciência de Dados e Análise Preditiva", score: 1 }
        ],
    },
    {
        title: "Qual destes tópicos você acha mais interessante:",
        choicesQuestion: [
            { option: "Segurança da Informação", score: 3 },
            { option: "Sistemas Embarcados e IoT", score: 2 },
            { option: "Inteligência Artificial e Machine Learning", score: 4 },
            { option: "Análise Estatística e Visualização de Dados", score: 1 }
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
        return
    }

    questionCounter++

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

