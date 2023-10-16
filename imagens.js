//Imagens e Sons do Jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;
let imagemDoCarro5;
let imagemDoCarro6;

//Sons
let somDaTrilha;
let somColidiu;
let somPonto;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDoCarro4 = loadImage("imagens/carro-4.png");
  imagemDoCarro5 = loadImage("imagens/carro-5.png");
  imagemDoCarro6 = loadImage("imagens/carro-6.png");
  imagemCarros =[imagemDoCarro1,imagemDoCarro2,imagemDoCarro3,imagemDoCarro4,imagemDoCarro5,imagemDoCarro6]

        somDaTrilha = loadSound("sons/trilha.mp3");
        somColidiu = loadSound("sons/colidiu.mp3");
        somPonto = loadSound("sons/pontos.wav");
}
