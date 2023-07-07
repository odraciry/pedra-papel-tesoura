const btOpenRules = document.getElementById('openRules');
const iconClose = document.getElementById('icon-close');
const btPlayAgain = document.getElementById('playAgain');

const paper = document.getElementById('paperDiv');
const rock = document.getElementById('rockDiv');
const scissors = document.getElementById('scissorsDiv');

const youPicked = document.getElementById('youPicked');
const housePicked = document.getElementById('pickedHouse')


const options = ['pedra', 'papel', 'tesoura']
let resultado = '';
let contador = 0;
let you = '';
const objetoAleatorio = () => {
    document.getElementById('boxGame').style.display = 'none'
    document.getElementById('resultado').style.display = 'block'
    if (options[Math.floor(Math.random() * options.length)] === "pedra") {
        if(you === 'papel'){
            contador += 1;
            resultado= "YOU WIN"
        }else if(you === 'tesoura'){
            resultado= "YOU LOSE"
        }else {
            resultado= "A TIE"
        }
        housePicked.style.left = '55%'
        housePicked.className = 'icon rockDiv';
    } else if (options[Math.floor(Math.random() * options.length)] === "papel") {
        if(you === 'tesoura'){
            contador += 1;
            resultado= "YOU WIN"
        }else if(you === 'pedra'){
            resultado= "YOU LOSE"
        }else {
            resultado= "A TIE"
        }
        housePicked.style.left = '55%'
        housePicked.className = 'icon paperDiv'
    } else {
        if(you === 'pedra'){
            contador += 1;
            resultado= "YOU WIN"
        }else if(you === 'papel'){
            resultado= "YOU LOSE"
        }else {
            resultado= "A TIE"
        }
        
        housePicked.className = 'icon scissorsDiv'
    }
    housePicked.style.transform = 'translatex(0)'
    console.log(contador)
    console.log(resultado)
    document.getElementById('resultadoPlacar').innerHTML = contador;
    document.getElementById('winOrLose').innerHTML = resultado;
};

btOpenRules.addEventListener('click', () => {
    document.getElementById('rules').style.display = 'block'
    document.getElementById('initial-page').style.display = 'none'
})

iconClose.addEventListener('click', () => {
    document.getElementById('rules').style.display = 'none'
    document.getElementById('initial-page').style.display = 'block'
})

btPlayAgain.addEventListener('click', () => {
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('boxGame').style.display = 'block'
})

paper.addEventListener('click', () => {
    document.getElementById('boxGame').style.display = 'none'
    document.getElementById('resultado').style.display = 'block'

    youPicked.className = 'icon paperDiv'
    you = 'papel'
    youPicked.style.transform = 'translatex(0)'
    setInterval(objetoAleatorio(), 1000)

})

rock.addEventListener('click', () => {
    document.getElementById('boxGame').style.display = 'none'
    document.getElementById('resultado').style.display = 'block'

    youPicked.className = 'icon rockDiv'
    you = 'pedra'
    youPicked.style.transform = 'translatex(0)'
    setInterval(objetoAleatorio(), 1000)
})

scissors.addEventListener('click', () => {
    document.getElementById('boxGame').style.display = 'none'
    document.getElementById('resultado').style.display = 'block'

    youPicked.className = 'icon scissorsDiv'
    youPicked.style.transform = 'translatex(0)'
    you = 'tesoura'
    setInterval(objetoAleatorio(), 1000)
})