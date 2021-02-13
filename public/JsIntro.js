var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
let textArea = document.getElementById("showdice");
let showchance = document.getElementById("chance");
let btn = document.getElementById("btn");
let Result = document.getElementById("result")
function drawRect(x,y,l,h,color){
  ctx.fillStyle = color;
  ctx.fillRect(x,y,l,h);
}
function drawCircle(x,y,r,start_angle,end_angle,color){
  ctx.beginPath();
  ctx.arc(x,y,r,start_angle,end_angle);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1,y1,x2,y2){
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}
function drawArc(x,y,r,start_angle,end_angle,color){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.arc(x,y,r,start_angle,end_angle);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}
function drawStar(cx,cy,spikes,outerRadius,innerRadius){
  var rot=Math.PI/2*3;
  var x=cx;
  var y=cy;
  var step=Math.PI/spikes;

  ctx.beginPath();
  ctx.moveTo(cx,cy-outerRadius)
  for(i=0;i<spikes;i++){
    x=cx+Math.cos(rot)*outerRadius;
    y=cy+Math.sin(rot)*outerRadius;
    ctx.lineTo(x,y)
    rot+=step

    x=cx+Math.cos(rot)*innerRadius;
    y=cy+Math.sin(rot)*innerRadius;
    ctx.lineTo(x,y)
    rot+=step
  }
  ctx.lineTo(cx,cy-outerRadius);
  ctx.closePath();
  ctx.lineWidth=2;
  ctx.strokeStyle='black';
  ctx.stroke();
}
let redcoins = {
    deckcoins : [[30,30],[30,120],[120,30],[120,120]],
    home : [[173,190],[173,205],[173,220],[173,235]],
    positions : [-6,-6,-6,-6],
    posOnscreen : [[30,180],
    [60,180],
    [90,180],
    [120,180],
    [150,180],
    [180,150],
    [180,120],
    [180,90],
    [180,60],
    [180,30],
    [180,0],
    [210,0],
    [240,0],
    [240,30],
    [240,60],
    [240,90],
    [240,120],
    [240,150],
    [270,180],
    [300,180],
    [330,180],
    [360,180],
    [390,180],
    [420,180],
    [420,210],
    [420,240],
    [390,240],
    [360,240],
    [330,240],
    [300,240],
    [270,240],
    [240,270],
    [240,300],
    [240,330],
    [240,360],
    [240,390],
    [240,420],
    [210,420],
    [180,420],
    [180,390],
    [180,360],
    [180,330],
    [180,300],
    [180,270],
    [150,240],
    [120,240],
    [90,240],
    [60,240],
    [30,240],
    [0,240],
    [0,210],
    [30,210],
    [60,210],
    [90,210],
    [120,210],
    [150,210]],
    showcoins : function(){
      for(i=0;i<4;i++){
        if(this.positions[i]==-6){
          drawCircle(this.deckcoins[i][0]+15,this.deckcoins[i][1]+15,10,0,2*Math.PI,"red");
        }
        else if(this.positions[i]==56){
          drawCircle(this.home[i][0]+15,this.home[i][1]+15,5,0,2*Math.PI,"red")
        }
        else{
          drawCircle(this.posOnscreen[this.positions[i]][0]+15,this.posOnscreen[this.positions[i]][1]+15,10,0,2*Math.PI,"red");
        }
      }
    }
}
let bluecoins = {
  deckcoins : [[300,300],[300,390],[390,300],[390,390]],
  home : [[247,190],[247,205],[247,220],[247,235]],
  positions : [-6,-6,-6,-6],
  posOnscreen : [[390,240],
  [360,240],
  [330,240],
  [300,240],
  [270,240],
  [240,270],
  [240,300],
  [240,330],
  [240,360],
  [240,390],
  [240,420],
  [210,420],
  [180,420],
  [180,390],
  [180,360],
  [180,330],
  [180,300],
  [180,270],
  [150,240],
  [120,240],
  [90,240],
  [60,240],
  [30,240],
  [0,240],
  [0,210],
  [0,180],
  [30,180],
  [60,180],
  [90,180],
  [120,180],
  [150,180],
  [180,150],
  [180,120],
  [180,90],
  [180,60],
  [180,30],
  [180,0],
  [210,0],
  [240,0],
  [240,30],
  [240,60],
  [240,90],
  [240,120],
  [240,150],
  [270,180],
  [300,180],
  [330,180],
  [360,180],
  [390,180],
  [420,180],
  [420,210],
  [390,210],
  [360,210],
  [330,210],
  [300,210],
  [270,210]],
  showcoins : function(){
    for(i=0;i<4;i++){
      if(this.positions[i]==-6){
        drawCircle(this.deckcoins[i][0]+15,this.deckcoins[i][1]+15,10,0,2*Math.PI,"blue");
      }
      else if(this.positions[i]==56){
        drawCircle(this.home[i][0]+15,this.home[i][1]+15,5,0,2*Math.PI,"blue")
      }
      else{
      drawCircle(this.posOnscreen[this.positions[i]][0]+15,this.posOnscreen[this.positions[i]][1]+15,10,0,2*Math.PI,"blue");
      }
    }
  }
}
let greencoins = {
  deckcoins : [[30,300],[30,390],[120,300],[120,390]],
  home : [[190,247],[205,247],[220,247],[235,247]],
  positions : [-6,-6,-6,-6],
  posOnscreen : [[180,390],
  [180,360],
  [180,330],
  [180,300],
  [180,270],
  [150,240],
  [120,240],
  [90,240],
  [60,240],
  [30,240],
  [0,240],
  [0,210],
  [0,180],
  [30,180],
  [60,180],
  [90,180],
  [120,180],
  [150,180],
  [180,150],
  [180,120],
  [180,90],
  [180,60],
  [180,30],
  [180,0],
  [210,0],
  [240,0],
  [240,30],
  [240,60],
  [240,90],
  [240,120],
  [240,150],
  [270,180],
  [300,180],
  [330,180],
  [360,180],
  [390,180],
  [420,180],
  [420,210],
  [420,240],
  [390,240],
  [360,240],
  [330,240],
  [300,240],
  [270,240],
  [240,270],
  [240,300],
  [240,330],
  [240,360],
  [240,390],
  [240,420],
  [210,420],
  [210,390],
  [210,360],
  [210,330],
  [210,300],
  [210,270],
  ],
  showcoins : function(){
    for(i=0;i<4;i++){
      if(this.positions[i]==-6){
        drawCircle(this.deckcoins[i][0]+15,this.deckcoins[i][1]+15,10,0,2*Math.PI,"green");
      }
      else if(this.positions[i]==56){
        drawCircle(this.home[i][0]+15,this.home[i][1]+15,5,0,2*Math.PI,"green")
      }
      else{
      drawCircle(this.posOnscreen[this.positions[i]][0]+15,this.posOnscreen[this.positions[i]][1]+15,10,0,2*Math.PI,"green");
      }
    }
  }
}
let yellowcoins = {
  deckcoins : [[300,30],[300,120],[390,30],[390,120]],
  home : [[190,173],[205,173],[220,173],[235,173]],
  positions : [-6,-6,-6,-6],
  posOnscreen : [[240,30],
  [240,60],
  [240,90],
  [240,120],
  [240,150],
  [270,180],
  [300,180],
  [330,180],
  [360,180],
  [390,180],
  [420,180],
  [420,210],
  [420,240],
  [390,240],
  [360,240],
  [330,240],
  [300,240],
  [270,240],
  [240,270],
  [240,300],
  [240,330],
  [240,360],
  [240,390],
  [240,420],
  [210,420],
  [180,420],
  [180,390],
  [180,360],
  [180,330],
  [180,300],
  [180,270],
  [150,240],
  [120,240],
  [90,240],
  [60,240],
  [30,240],
  [0,240],
  [0,210],
  [0,180],
  [30,180],
  [60,180],
  [90,180],
  [120,180],
  [150,180],
  [180,150],
  [180,120],
  [180,90],
  [180,60],
  [180,30],
  [180,0],
  [210,0],
  [210,30],
  [210,60],
  [210,90],
  [210,120],
  [210,150]
],
  showcoins : function(){
    for(i=0;i<4;i++){
      if(this.positions[i]==-6){
        drawCircle(this.deckcoins[i][0]+15,this.deckcoins[i][1]+15,10,0,2*Math.PI,"rgb(199, 192, 0)");
      }
      else if(this.positions[i]==56){
        drawCircle(this.home[i][0]+15,this.home[i][1]+15,5,0,2*Math.PI,"rgb(199, 192, 0)");
      }
      else{
        drawCircle(this.posOnscreen[this.positions[i]][0]+15,this.posOnscreen[this.positions[i]][1]+15,10,0,2*Math.PI,"rgb(199, 192, 0)");
      }
    }
  }
}
function showgame(){
  drawRect(180,180,90,90,"white");
  drawRect(0,0,180,180,"rgb(255, 154, 120)");
  drawRect(270,270,180,180,"lightblue");
  drawRect(0,270,180,180,"lightgreen");
  drawRect(270,0,180,180,"yellow");
  
  drawRect(30,30,30,30,"white");
  drawRect(30,120,30,30,"white");
  drawRect(120,30,30,30,"white");
  drawRect(120,120,30,30,"white");
  
  drawRect(30,300,30,30,"white");
  drawRect(30,390,30,30,"white");
  drawRect(120,300,30,30,"white");
  drawRect(120,390,30,30,"white");
  
  drawRect(300,30,30,30,"white");
  drawRect(300,120,30,30,"white");
  drawRect(390,30,30,30,"white");
  drawRect(390,120,30,30,"white");
  
  drawRect(300,300,30,30,"white");
  drawRect(300,390,30,30,"white");
  drawRect(390,300,30,30,"white");
  drawRect(390,390,30,30,"white");
  
  drawRect(30,180,30,30,"rgb(255, 154, 120)");
  drawRect(30,210,30,30,"rgb(255, 154, 120)");
  drawRect(60,210,30,30,"rgb(255, 154, 120)");
  drawRect(90,210,30,30,"rgb(255, 154, 120)");
  drawRect(120,210,30,30,"rgb(255, 154, 120)");
  drawRect(150,210,30,30,"rgb(255, 154, 120)");
  
  drawRect(240,30,30,30,"yellow");
  drawRect(210,30,30,30,"yellow");
  drawRect(210,60,30,30,"yellow");
  drawRect(210,90,30,30,"yellow");
  drawRect(210,120,30,30,"yellow");
  drawRect(210,150,30,30,"yellow");
  
  drawRect(390,240,30,30,"lightblue");
  drawRect(270,210,30,30,"lightblue");
  drawRect(300,210,30,30,"lightblue");
  drawRect(330,210,30,30,"lightblue");
  drawRect(360,210,30,30,"lightblue");
  drawRect(390,210,30,30,"lightblue");
  
  drawRect(180,390,30,30,"lightgreen");
  drawRect(210,270,30,30,"lightgreen");
  drawRect(210,300,30,30,"lightgreen");
  drawRect(210,330,30,30,"lightgreen");
  drawRect(210,360,30,30,"lightgreen");
  drawRect(210,390,30,30,"lightgreen");
  
  drawRect(180,420,30,30,"white");
  drawRect(180,360,30,30,"white");
  drawRect(180,330,30,30,"white");
  drawRect(180,300,30,30,"white");
  drawRect(180,270,30,30,"white");
  drawRect(150,240,30,30,"white");
  drawRect(120,240,30,30,"white");
  drawRect(90,240,30,30,"white");
  drawRect(60,240,30,30,"white");
  drawRect(30,240,30,30,"white");
  drawRect(0,240,30,30,"white");
  drawRect(0,210,30,30,"white");
  drawRect(0,180,30,30,"white");
  drawRect(60,180,30,30,"white");
  drawRect(90,180,30,30,"white");
  drawRect(120,180,30,30,"white");
  drawRect(150,180,30,30,"white");
  drawRect(180,150,30,30,"white");
  drawRect(180,120,30,30,"white");
  drawRect(180,90,30,30,"white");
  drawRect(180,60,30,30,"white");
  drawRect(180,30,30,30,"white");
  drawRect(180,0,30,30,"white");
  drawRect(210,0,30,30,"white");
  drawRect(240,0,30,30,"white");
  drawRect(240,60,30,30,"white");
  drawRect(240,90,30,30,"white");
  drawRect(240,120,30,30,"white");
  drawRect(240,150,30,30,"white");
  drawRect(270,180,30,30,"white");
  drawRect(300,180,30,30,"white");
  drawRect(330,180,30,30,"white");
  drawRect(360,180,30,30,"white");
  drawRect(390,180,30,30,"white");
  drawRect(420,180,30,30,"white");
  drawRect(420,210,30,30,"white");
  drawRect(420,240,30,30,"white");
  drawRect(360,240,30,30,"white");
  drawRect(330,240,30,30,"white");
  drawRect(300,240,30,30,"white");
  drawRect(270,240,30,30,"white");
  drawRect(240,270,30,30,"white");
  drawRect(240,300,30,30,"white");
  drawRect(240,330,30,30,"white");
  drawRect(240,360,30,30,"white");
  drawRect(240,390,30,30,"white");
  drawRect(240,420,30,30,"white");
  drawRect(210,420,30,30,"white");
  drawRect(180,420,30,30,"white");
  
  drawLine(0,0,0,450);
  drawLine(180,0,180,450);
  drawLine(270,0,270,450);
  drawLine(450,0,450,450);
  drawLine(0,0,450,0);
  drawLine(0,180,450,180);
  drawLine(0,270,450,270);
  drawLine(0,450,450,450);
  drawLine(180,30,270,30);
  drawLine(180,60,270,60);
  drawLine(180,90,270,90);
  drawLine(180,120,270,120);
  drawLine(180,150,270,150);
  drawLine(180,300,270,300);
  drawLine(180,330,270,330);
  drawLine(180,360,270,360);
  drawLine(180,390,270,390);
  drawLine(180,420,270,420);
  drawLine(0,210,180,210);
  drawLine(0,240,180,240);
  drawLine(270,210,450,210);
  drawLine(270,240,450,240);
  drawLine(30,180,30,270);
  drawLine(60,180,60,270);
  drawLine(90,180,90,270);
  drawLine(120,180,120,270);
  drawLine(150,180,150,270);
  drawLine(300,180,300,270);
  drawLine(330,180,330,270);
  drawLine(360,180,360,270);
  drawLine(390,180,390,270);
  drawLine(420,180,420,270);
  drawLine(210,0,210,180);
  drawLine(240,0,240,180);
  drawLine(210,270,210,450);
  drawLine(240,270,240,450);
  drawLine(180,180,270,270);
  drawLine(270,180,180,270);
  
  drawArc(225,225,30,0.25*Math.PI,0.75*Math.PI,"lightgreen");
  drawArc(225,225,30,0.75*Math.PI,1.25*Math.PI,"rgb(255, 154, 120)");
  drawArc(225,225,30,1.25*Math.PI,1.75*Math.PI,"yellow");
  drawArc(225,225,30,1.75*Math.PI,2.25*Math.PI,"lightblue");
  
  drawStar(195,75,5,13,8);
  drawStar(375,195,5,13,8);
  drawStar(255,375,5,13,8);
  drawStar(75,255,5,13,8);
}
let game = 1;
let chance = 0;
let coins = [redcoins,yellowcoins,bluecoins,greencoins]
setInterval(() => {
    showgame();
    redcoins.showcoins();
    bluecoins.showcoins();
    yellowcoins.showcoins();
    greencoins.showcoins();
    if(showAvailablePositions==1){
      let co = coins[chance];
      for(i=0;i<4;i++){
        if(co.positions[i]+number>=0 && co.positions[i]+number<=56){
          if(co.positions[i]>=0){
            drawCircle(co.posOnscreen[co.positions[i]][0]+15,co.posOnscreen[co.positions[i]][1]+15,10,0,2*Math.PI,"gray");
          }
          else{
            drawCircle(co.deckcoins[i][0]+15,co.deckcoins[i][1]+15,10,0,2*Math.PI,"gray");
          }
        }
      }
    }
}, 0);
let number = 0;
let completed = [0,0,0,0];

function getMousePosition(event,number){ 
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top;
  if(btn.disabled==false){
    return false;
  }
  console.log(x,y);
  for(i=0;i<4;i++){
      let co = coins[chance];
      let temp_x = 0;
      let temp_y = 0;
      if(co.positions[i]>=0 && co.positions[i]<=55){
          temp_x = co.posOnscreen[co.positions[i]][0]; 
          temp_y = co.posOnscreen[co.positions[i]][1];
      }
      else if(co.positions[i]<0){
          temp_x = co.deckcoins[i][0];
          temp_y = co.deckcoins[i][1];
      }
      else{
        continue;
      }
      if(x-temp_x<=30 && y-temp_y<=30 && x-temp_x>=0 && y-temp_y>=0){
          if(co.positions[i]+number<0){
            co.positions[i] = -6;
            console.log("Yo man");
            return false;
          }
          else if(co.positions[i]+number>56){
            return false;
          }
          else if(co.positions[i]+number==56){
              co.positions[i] = 56;
              completed[chance] += 1;
              btn.disabled = false;
              if(completed[chance]==4){
                winners_list.push(col[chance]);
                chance = (chance+1)%4;
                return true;
              }
              return false;
          }
          co.positions[i] += number;
          //console.log("gfdhgf",co.positions[i]);
          for(k=1;k<4;k++){
            let temp_chance = (chance+k)%4;
            let def = coins[temp_chance];
            for(j=0;j<4;j++){
              if(def.positions[j]>=0 && def.positions[j]<=50 && co.positions[i]!=0 
                && co.positions[i]!=8 && co.positions[i]!=13 && co.positions[i]!=21
                && co.positions[i]!=26 && co.positions[i]!=34 && co.positions[i]!=39
                && co.positions[i]!=47){
                  tempx = def.posOnscreen[def.positions[j]][0];
                  tempy = def.posOnscreen[def.positions[j]][1];
                  attx = co.posOnscreen[co.positions[i]][0];
                  atty = co.posOnscreen[co.positions[i]][1];
                  if(tempx==attx && tempy==atty){
                    def.positions[j] = -6;
                    btn.disabled = false;
                    return false;
                  }
              }
            }
          }
          return true;
      }
  }
  return false;


  
}
canvas.addEventListener("mousedown",function(e){

  let res = getMousePosition(e,number);
  console.log("chance",chance);
  if(number!=6 && res){
    chance = (chance+1)%4;
  }
  if(res){
    showAvailablePositions = 0;
    btn.disabled = false;
  }
});
let col = ["red","yellow","blue","green"];
let winners_list = [];
let showAvailablePositions = 0;
function roledice(){
  if((completed[0]==4 && completed[1]==4 && completed[2]==4)||
    (completed[0]==4 && completed[1]==4 && completed[3]==4)||
    (completed[0]==4 && completed[3]==4 && completed[2]==4)||
    (completed[3]==4 && completed[1]==4 && completed[2]==4)){
    let sol = "";
    for(i=0;i<3;i++){
      sol = sol + winners_list[i] + " ";
    }
    Result.innerHTML = sol;
    btn.disabled = true;
    return;
  }
  while(completed[chance]==4){
    chance = (chance+1)%4;
  }
  number = Math.floor(Math.random()*6) + 1;
  textArea.innerHTML = number;  
  showchance.innerHTML = col[chance];
  showchance.style.background = col[chance];
  console.log("chance",chance);
  btn.disabled = true;
  if(number<6){
    let flag = 0;
    let i = 0;
    for(i=0;i<4;i++){
      if(coins[chance].positions[i]+number<0 || coins[chance].positions[i]+number>56){
        //console.log("dfsgnhg");
        continue;
      }
      else{
        flag = 1;
        showAvailablePositions = 1;
      }
    }
    //console.log(i);
    if(flag==0){
      chance = (chance+1)%4;
      console.log("Moving Out")
      btn.disabled = false;
      return;
    }
  }
  if(number==6){
    let flag = 0;
    let i = 0;
    for(i=0;i<4;i++){
        if(coins[chance].positions[i]+number>56 || coins[chance].positions[i]+number<0){
          continue;
        }
        else{
          showAvailablePositions = 1;
          flag = 1;
        }
    }
    if(flag==0){
      chance = (chance+1)%4;
      console.log("Moving Out")
      btn.disabled = false;
      return;
    }
  }
}







