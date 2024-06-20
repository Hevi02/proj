const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você acha sobre a saúde ambiental na sua cidade?",
        alternativas: [
            {
                texto: "minha cidade se preocupa muito com as ambientação.",
                afirmacao: "A saúde ambiental é uma área de estudo que se preocupa com a avaliação e o controle dos impactos dos seres humanos sobre a natureza."
            },
            {
                texto: "minha cidade não se importa com a saúde ambiental.",
                afirmacao: "A maior parte dos munucípios brasileiros enfrenta grandes problemas ambientais."
            }
        ]
    },
    {
        enunciado: "Você acha que a sua cidade pode ter de melhorias para evitar problemas ambientais futuros?",
        alternativas: [
            {
                texto: "minha cidade não precisa de melhorias",
                afirmacao: "Um ambiente saudável é vital para garantir uma vida saudável e promover o bem-estar de todos."
            },
            {
                texto: "minha cidade precisa de grandes melhorias com os cuidados ambientais",
                afirmacao: "Entre eles, os principais estão em queimadas, desmatamento e o assoreamento de rios."
            }
        ]
    },
    {
        enunciado: "Você acha que o ambiente afeta o bem-estar das pessoas?",
        alternativas: [
            {
                texto: "Sim. um lugar limpo pode ocasionar uma boa saúde.",
                afirmacao: "A interação entre o meio ambiente e a saúde públima aborda aspectos que influenciam o bem-estar e inclui fatores físicos, químicos e biológicos."
            },
            {
                texto: "Não, acho que o ambiente não afeta a saúde.",
                afirmacao: "Alguns problemas como, poluição atmosférica, poluição das águas, queimas e desmatamentos podem afetar de diversas maneiras a saúde do ser humano."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
