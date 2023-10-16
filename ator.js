//Codigo do Ator
let xAtor = 109;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

//Funções
function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
   if (keyIsDown(UP_ARROW)){yAtor -= 2;} 
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMoverDown()){
    yAtor += 2;} 
 
  }
}

function incluiPontos(){
  
  textAlign(CENTER);
  textSize(25);
  fill(255,255,0);
  text(meusPontos, width / 5, 27);
}





function VoltaAtorSpawn(){ 
  yAtor = 370;
  
      
    }

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros,larguraCarros,xAtor,yAtor,15)
  
  if (colisao){
    VoltaAtorSpawn();
    somColidiu.play();
    if (marcaPontoPerdido()){
      meusPontos -= 1;
    }
       
   }
  }  
}
function marcaPonto(){
  if (yAtor <15){
    meusPontos += 1;
    VoltaAtorSpawn();
    somPonto.play();
  }
}

function marcaPontoPerdido (){
  return meusPontos > 0

}

function podeSeMoverDown(){
  return yAtor < 370;
}

