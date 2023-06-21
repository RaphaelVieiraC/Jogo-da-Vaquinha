//Codigo do Carro

let xCarros = [600,600,600,-50,-50,-50]
let yCarros = [40,100,150,210,265,320]
let velocidadeCarros = [2,2.5,3.5,-2,-2.5,-3.5]
let comprimentoCarros = 60;
let larguraCarros = 40;


//Funções
function mostraCarro(){
  
    for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, larguraCarros);

  }
}

function movimentaCarro(){
  for (let i =0; i < imagemCarros.length; i = i +1){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  if (xCarros[i]<-80){xCarros[i] = 630}
  if (xCarros[i]> 630){xCarros[i] = -80}

  }
  
}
