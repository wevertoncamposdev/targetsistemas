const readline = require('readline');
const prompt = require("prompt-sync")({ sigint: true });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function questionOne() {

    /* 1) Observe o trecho de código abaixo:

    int INDICE = 13, SOMA = 0, K = 0;
    enquanto K < INDICE faça
    {
        K = K + 1;
        SOMA = SOMA + K;
    }
    imprimir(SOMA);
    Ao final do processamento, qual será o valor da variável SOMA? 
    */
    var I = 13, S = 0, K = 0;
    while (K < I) {
        K = K + 1;
        S = S + K;
    }

    console.log('A resposta é:', S)
}

function questionTwo() {

    /* 
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será 
    a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
    escreva um programa na linguagem que desejar onde, informado um número, ele calcule a 
    sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence 
    ou não a sequência.

    IMPORTANTE:
    Esse número pode ser informado através de qualquer entrada de sua preferência 
    ou pode ser previamente definido no código;
    */

    const input = parseInt(prompt("Digite um número e direi se pertence à sequência de Fibonacci: "));
    let a = 0;
    let b = 1;
    let c = a + b;
    while (c <= input) {
        if (c === input) {
            console.log(`${input} pertence à sequência de Fibonacci!`);
            return true;
        }
        a = b;
        b = c;
        c = a + b;
    }

    if (c > input) {
        console.log(`${input} não pertence à sequência de Fibonacci.`);
        return true;
    }

}

function questionThree() {

    /* 
    3) Descubra a lógica e complete o próximo elemento:

    a) 1, 3, 5, 7, ___
    b) 2, 4, 8, 16, 32, 64, ____
    c) 0, 1, 4, 9, 16, 25, 36, ____
    d) 4, 16, 36, 64, ____
    e) 1, 1, 2, 3, 5, 8, ____
    f) 2,10, 12, 16, 17, 18, 19, ____
    
    */
    console.log(`
    No momento não consigo automatizar esta resposta por isso estou passando por escrito.

    a) 1, 3, 5, 7, 9
    A lógica é adicionar 2 ao elemento anterior.

    b) 2, 4, 8, 16, 32, 64, 128
    A lógica é multiplicar o elemento anterior por 2.

    c) 0, 1, 4, 9, 16, 25, 36, 49
    A lógica é elevar o índice do elemento por 2.

    d) 4, 16, 36, 64, ____

    e) 1, 1, 2, 3, 5, 8, 13
    A lógica é adicionar os dois elementos anteriores para obter o próximo elemento.

    f) 2, 10, 12, 16, 17, 18, 19, 20 - A lógica não é clara a distância entre eles é 8,2,4,1,1,1,1.
    Se tivesse um ciclo poderia definir uma lógica, mas não tem.

    `);
};

function questionFour() {
    /* 
    4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. 
    O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto 
    a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

    IMPORTANTE:
    a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.
    b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)
    c) Explique como chegou no resultado.

    Resposta:
    De inicia é possível extrair duas hipóteses
    1 Pelo fato do veículo ser mais rápido ele estára mais longe de Ribeirão Preto
    2 Como os dois veículos se encontra na estrada podemos dizer que eles estão a mesma distancia

    A primeira coisa é definir o ponto de encontro
    t = d / (v1 + v2) = t = 100 / (110 + 80) = 0,5882 horas

    Agora podemos definir a posição do carro: d1 = v1 * t = 110 * 0,5882 = 64,7 km
    Agora podemos definir a posição do caminhão adicionando o tempo com o pedágio, 
    d1 = v1 * (t + 0,1667) = 80 * 0,7549 = 60,4 km

    Conclusão, quando eles se encontrarem, o caminhão estará a uma distância de 100 km - 60,4 km = 39,6 km da cidade de Ribeirão Preto, 
    enquanto o carro estará a uma distância de 64,7 km. Portanto, o caminhão estará mais próximo da cidade de Ribeirão Preto 
    quando eles se encontrarem na estrada.
    */
    console.log(`
    A primeira etapa é definir o ponto de encontro:
    t = d / (v1 + v2) = t = 100 / (110 + 80) = 0,5882 horas

    Agora podemos definir a posição do carro: 
    d1 = v1 * t = 110 * 0,5882 = 64,7 km

    Agora podemos definir a posição do caminhão adicionando o tempo com o pedágio, 
    d1 = v1 * (t + 0,1667) = 80 * 0,7549 = 60,4 km

    Conclusão, quando eles se encontrarem, o caminhão estará a uma distância de 100 km - 60,4 km = 39,6 km da cidade de Ribeirão Preto, 
    enquanto o carro estará a uma distância de 64,7 km. Portanto, o caminhão estará mais próximo da cidade de Ribeirão Preto 
    quando eles se encontrarem na estrada.
    `);
};

function questionFive() {

    /* 
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;

    */
    const input = prompt("Digite um texto: ");

    let newString = ''
    for (let i = input.length - 1; i >= 0; i--) {
        newString += input[i];
    }

    newString = newString.charAt(0).toUpperCase() + newString.slice(1).toLowerCase();
    console.log('Essa string invertida ficaria assim: ', newString);
};

function askQuestion() {
    rl.question('Digite o número da questão e eu responderei? ', (input) => {
        switch (input) {
            case '1':
                questionOne();
                break;
            case '2':
                questionTwo(10);
                break;
            case '3':
                questionThree();
                break;
            case '4':
                questionFour();
                break;
            case '5':
                questionFive();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log('Opção inválida!');
                break;
        }
        if (input !== 'exit') {
            askQuestion();
        }
    });
}

askQuestion(); 