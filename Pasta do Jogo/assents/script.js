//Elementos do Html
let frase = document.querySelector("#frase");
let jogador = document.querySelector("#jogador");
let maquina = document.querySelector("#maquina");
let recomecar = document.querySelector("#btn-recomecar");
let areaEscolha = document.querySelector("#area-escolha");
let areaResultado = document.querySelector("#area-resultado");

//Imagem do projeto
let imagens_jogador = [
  "assents/img/pedra.png",
  "assents/img/papel.png",
  "assents/img/tesoura.png",
];

let imagens_maquina = [
  "assents/img/pc-pedra.png",
  "assents/img/pc-papel.png",
  "assents/img/pc-tesoura.png",
];

//Indice
var index = 0;

//Efeito de imagem
function efeitoImagem() {
  jogador.src = imagens_jogador[index];
  maquina.src = imagens_maquina[index];

  index++;
  if (index === 3) {
    index = 0;
  }
}

//Chamada do efeito
let efeito = setInterval(efeitoImagem, 100);

//Seleção do jogador
function select(escolhaJogador) {
  //Esconder area escolha
  areaEscolha.style.display = "none";
  //Mostrar area resultado
  areaResultado.style.display = "block";

  //Cronometro
  frase.innerHTML = "3";
  let tempo = setInterval(() => {
    let cronometro = parseInt(frase.innerHTML);
    cronometro--;
    frase.innerHTML = cronometro;

    if (cronometro === 0) {
      clearInterval(tempo);
      clearInterval(efeito);
    }
  }, 1000);

  //Regras do jogo
  setTimeout(() => {
    //Randomizar a maquina
    var escolhaMaquina = Math.floor(Math.random() * 3);

    //Mostrar escolha da maquina
    maquina.src = imagens_maquina[escolhaMaquina];

    //Mostrar escolha do jogador
    jogador.src = imagens_jogador[escolhaJogador];

    //Verificar empate
    if (escolhaJogador === escolhaMaquina) {
      frase.innerHTML = "Empatou!";
      recomecar.style.display = "block";
      return false;
    }

    //Verificar vitoria
    switch (escolhaJogador) {
      case 0: //escolheu pedra
        escolhaMaquina === 2
          ? (frase.innerHTML = "Você venceu!")
          : (frase.innerHTML = "Você perdeu!");
        recomecar.style.display = "block";
        break;
      case 1: //escolheu papel
        escolhaMaquina === 0
          ? (frase.innerHTML = "Você venceu!")
          : (frase.innerHTML = "Você perdeu!");
        recomecar.style.display = "block";
        break;
      case 2: //escolheu tesoura
        escolhaMaquina === 1
          ? (frase.innerHTML = "Você venceu!")
          : (frase.innerHTML = "Você perdeu!");
        recomecar.style.display = "block";
        break;
      default:
        alert("Escolha inválida");
    }
  }, 3000);
}
