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
                afirmacao: "A interação entre o meio ambiente e a saúde pública aborda aspectos que influenciam o bem-estar e inclui fatores físicos, químicos e biológicos."
            },
            {
                texto: "Não, acho que o ambiente não afeta a saúde.",
                afirmacao:"Alguns problemas como, poluição atmosférica, poluição das águas, queimas e desmatamentos podem afetar de diversas maneiras a saúde do ser humano."
            }
        ]
    },
    {
        enunciado: "você faria trabalho voluntário para ajudar sua cidade?",
        alternativas: [
            {
                texto: "Sim, eu gostaria de ajudar a minha cidade para ver resultados no meio ambiente.",
                afirmacao: "A exposição a produtos tóxicos pode levar a distúrbios de saúde crônicos e muitas vezes, irreversíveis, como problemas congênitos e doençãs associadas à desregulação endócrina."
            },
            {
                texto: "Não. eu acho que isso deve vir de um orgão maior, e não preciso ajudar para isso.",
                afirmacao: "Para podermos ajudar nos problemas ambientais devemos fazer primeiramente o básico. reciclar e reutilizar, evitar produtos descartáveis como copos descartáveis, canudos, etc."
            }
        ]
    },
    {
        enunciado: "Na sua residência há cuidados com a separação de produtos recicláveis?",
        alternativas: [
            {
                texto: "Sim, nós separamos oa lixos e reutilizamos produtos que podem ser reciclados.",
                afirmacao: "Um ambiente saudável e limpo é vital para garantir uma vida saudável e promover o bem-estar para todos."
            },
            {
                texto: "Na minha casa não há reciclagens e não nos importamos com reutilização de objetos.",
                afirmacao: "Ambientes mais saudáveis poderiam evitar grandes problemas de saúde e doenças. "
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
