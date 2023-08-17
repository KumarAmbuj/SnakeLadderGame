//var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
//myModal.show();
const startBtn=document.getElementById('startBtn');
const onStart=document.getElementById('onStart');
const endBtn=document.getElementById('endBtn');
const home=document.getElementById('home');
const dice=document.getElementById('dice');
const diceRollBtn=document.getElementById('diceRollBtn');
const sixCountImage=document.getElementById('sixCountImage');
const playerTurnText=document.getElementById('playerTurnText');
const result=document.getElementById('result');
const player1Btn=document.getElementById('player1Btn');
const player2Btn=document.getElementById('player2Btn');
const ladderFrom=[1, 4, 9, 28,36,51,71,80];
const ladderTo=  [38,14,31,84,44,67,91,100];
const snakeFrom= [16,47,49,56,62,63,87,93,95,98];
const snakeTo=   [6, 26,30,53,19,60,24,73,75,78];
result.textContent="";
let player=0;
let player1sum=0;
let player2sum=0;
let sixCount=0;
let count=0;
let player1Direction="right";
let player2Direction="right";

let player1Left=0;
let player1Bottom=0;

let player2Left=0;
let player2Bottom=0;

const diceArray=['',"dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
startBtn.addEventListener('click',()=>{
    if(startBtn.textContent==="Start Game"){
    onStart.style.display="flex";
    home.style.display="flex";
    startBtn.textContent="Restart Game";
    dice.setAttribute("src","dice.jpg");
    }
    else{
        startBtn.textContent="Start Game";
        location.reload();
    }

})
endBtn.addEventListener('click',()=>{
    location.reload();
    startBtn.textContent="Start Game";
    onStart.style.display="none";
    home.style.display='none';
    
})

let sixCountImg=`<div class="sixCount">
<img src="dice6.png" />
</div>`
diceRollBtn.addEventListener('click',()=>{
    //home.innerHTML="";
    const n=Math.floor(Math.random()*6+1);
    count+=n;
    
    //const n=6;
    dice.setAttribute("src",diceArray[n]);
    if(player===0){
        if(player1sum+count>100){
            result.textContent="You got moves more than required!!!"
            player=1-player;
            count=0;
            showPlayerTurn(player);
           
            return;
        }
    }
    else{
       if(player2sum+count>100){
        result.textContent="You got moves more than required!!!"
        player=1-player;
        count=0;
        showPlayerTurn(player);
       
        return;
       }
    }
    if(n==6){
        result.textContent="Wooohooo you got six!! Roll Dice again"
      sixCount++;
      if(sixCount===3){
         result.textContent="You got 3 sixes and move cancelled!!!"
         player=1-player;
         count=0;
        showPlayerTurn(player);
      
      }
      else{
          sixCountImage.innerHTML+=sixCountImg;
          
      }
    }
    else{
        sixCount=0;
        if(player===0){
            document.getElementById('redInitialButton').style.display="none";
        }
        else{
            document.getElementById('blackInitialButton').style.display="none";
        }
        //forward call
        moveForward(player,count);
        //right(player,player1Btn,15);
        //ladder
        //snake
        player=1-player;
        count=0;
        showPlayerTurn(player);
        
        
    }
    
})
function showPlayerTurn(a){
    const id=setTimeout(()=>{
        dice.setAttribute("src","dice.jpg");
    sixCountImage.innerHTML="";

    if(a===0){
        
        result.textContent="";
        playerTurnText.textContent="Player one's turn!!!";
        playerTurnText.style.color="red";

    }
    else{
        result.textContent="";
        playerTurnText.textContent="Player two's turn!!!";
        playerTurnText.style.color="black";
    }
    },600)
   
}

function moveForward(player,count){
    console.log(count);
    
    
    if(count===0){
        return;
    }
    if(player===0){
       if(player1sum===0){
          player1sum+=1;
          right(player,player1Btn,15);
       }
       else{
        console.log('hey');
        player1sum++;
           if((player1sum)%10==1){
             up(player,player1Btn,50);
           }
           else if(player1sum!=2 && player1sum%10==2){
              if(player1Direction==="right"){
                player1Direction="left";
              }
              else{
                player1Direction==='right';

              }
              if(player1Direction==="right"){
                right(player,player1Btn,50)
              }
              else{
                left(player,player1Btn,50);
              }
              
           }
   

       }
       moveForward(player,count-1);

    }
    else{
        if(player2sum===0){
            player2sum++;
            right(player,player2Btn,15);
         }
         else{

            player2sum++;
           if((player2sum)%10===1){
             up(player,player2Btn,50);
           }
           else if(player2sum!==2 && player2sum%10===2){
              if(player2Direction==="right"){
                player2Direction="left";
              }
              else{
                player2Direction==='right';

              }
              if(player2Direction==="right"){
                right(player,player2Btn,50)
              }
              else{
                left(player,player2Btn,50);
              }
              
           }
      
         }
         moveForward(player,count-1);

    }



}

function moveBackward(){

}

function up(player,playerBtn,pixel){

    if(player===0){
        let a=0;
        player1Btn.style.display="block";
        
        const id=setInterval(()=>{
           a++;
           player1Btn.style.bottom=player1Bottom+a+"px";
           if(a===pixel){
            clearInterval(id);
           }

        },20)

        player1Bottom+=pixel;
        
        
          
     }
     else{
        let a=0;
        player2Btn.style.display="block";
        
        const id=setInterval(()=>{
           a++;
           player2Btn.style.bottom=player2Bottom+a+"px";
           if(a===pixel){
            clearInterval(id);
           }

        },20)

        player2Bottom+=pixel;
        

     }

}
function down(){

}
function right(player,playerBtn,pixel){
     //let pixels=pixel;
     //console.log(pixels);
     console.log('right');
     if(player===0){
        let a=0;
        player1Btn.style.display="block";
        
        const id=setInterval(()=>{
           a++;
           player1Btn.style.left=player1Left+a+"px";
           if(a===pixel){
            clearInterval(id);
           }

        },20)

        player1Left+=pixel;
        
        
          
     }
     else{
        let a=0;
        player2Btn.style.display="block";
        
        const id=setInterval(()=>{
           a++;
           player2Btn.style.left=player2Left+a+"px";
           if(a===pixel){
            clearInterval(id);
           }

        },20)

        player2Left+=pixel;
        

     }
  
   

}
function left(player,playerBtn,pixel){
    console.log('left');

    if(player===0){
        let a=0;
        player1Btn.style.display="block";
        
        const id=setInterval(()=>{
           a++;
           player1Btn.style.left=(player1Left-a)+"px";
           if(a===pixel){
            clearInterval(id);
           }

        },20)

        player1Left-=pixel;
        
        
          
     }
     else{
        let a=0;
        player2Btn.style.display="block";
        
        const id=setInterval(()=>{
           a++;
           player2Btn.style.left=(player2Left-a)+"px";
           if(a===pixel){
            clearInterval(id);
           }

        },20)

        player2Left-=pixel;
        

     }



}