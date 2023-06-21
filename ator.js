//Codigo do Ator
let xAtor = 50;
let yAtor = 370;
let colisao = false;

//Funções
function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
   if (keyIsDown(UP_ARROW)){yAtor -= 2;} 
  if (keyIsDown(DOWN_ARROW)){yAtor += 2;} 
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros,larguraCarros,xAtor,yAtor,15)
  
  if (colisao){
    Colidiu();
    
    function Colidiu(){
      
      yAtor = 370;
      
    }
    
   }
  }
}