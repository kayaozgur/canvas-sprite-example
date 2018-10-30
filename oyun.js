
/***************** Canvas *********************/
const canvas = document.querySelector('canvas');
canvas.width = innerWidth-30;
canvas.height = innerHeight-30;
canvas.style.border = 'solid';
const c = canvas.getContext('2d');

/****************Degiskenler *******************/

this.avci = new Image();
this.avci.src = 'image/avci.png';

this.dusman = new Image();
this.dusman.src = 'image/dusman.png';

/**************** Harita *********************/
var block = new Image();
block.src = './image/map.png';
var mapW = 428;
var mapH = 263;
var blockX = 74;
var blockY = 0;
var blockW = 32;
var blockH = 32;

var harita = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0],
    [0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,0,4,0,0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,2,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,5,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,7,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,8,1,1],
    [1,1,8,1,7,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1],
    [1,1,7,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function haritaCiz() {

    for (let i = 0; i < harita.length; i++) {
        for (let j = 0; j < harita[i].length; j++) {
            if(harita[i][j] == 0){
                c.drawImage(block,blockX+1*(blockW+1),blockY+1*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
            }

            if(harita[i][j] == 1){
                c.drawImage(block,blockX+8*(blockW+1),blockY+5*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }

             if(harita[i][j] == 2){
                c.drawImage(block,blockX+0*(blockW+1),blockY+5*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }

             if(harita[i][j] == 3){
                c.drawImage(block,blockX+0*(blockW+1),blockY+6*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }

             if(harita[i][j] == 4){
                c.drawImage(block,blockX+2*(blockW+1),blockY+7*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }

             if(harita[i][j] == 5){
                c.drawImage(block,blockX+1*(blockW+1),blockY+7*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }

             if(harita[i][j] == 6){
                c.drawImage(block,blockX+4*(blockW+1),blockY+7*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }

             if(harita[i][j] == 7){
                c.drawImage(block,blockX+7*(blockW+1),blockY+4*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }

             if(harita[i][j] == 8){
                c.drawImage(block,blockX+7*(blockW+1),blockY+3*(blockH+1),blockW,blockH,j*blockW,i*blockH,blockW,blockH);
             }


        }

    }

}


/************ Kontroller *********************/
let keyboard = [false,false,false,false,false];
let dusmanKey = [false,false,false,false,false];


document.addEventListener('keydown',tusdown)
function tusdown(e) {
        /************Caracter kontrol tusları **********/
        if(e.keyCode == 37) {  keyboard[0] = true;  }
        if(e.keyCode == 38) {  keyboard[1] = true;  }
        if(e.keyCode == 39) {  keyboard[2] = true;  }
        if(e.keyCode == 40) {  keyboard[3] = true;  }
        if(e.keyCode == 32) {  keyboard[4] = true;  }

        /**********Dusman kontrol tuslari **********/
        if(e.keyCode == 65) {  dusmanKey[0] = true;  }
        if(e.keyCode == 87) {  dusmanKey[1] = true;  }
        if(e.keyCode == 68) {  dusmanKey[2] = true;  }
        if(e.keyCode == 83) {  dusmanKey[3] = true;  }
        if(e.keyCode == 16) {  dusmanKey[4] = true;  }
};

document.addEventListener('keyup', tusup)
function tusup(e) {
     /************Adam kontrol tusları **********/
        if(e.keyCode == 37) {  keyboard[0] = false;  }
        if(e.keyCode == 38) {  keyboard[1] = false;  }
        if(e.keyCode == 39) {  keyboard[2] = false;  }
        if(e.keyCode == 40) {  keyboard[3] = false;  }
        if(e.keyCode == 32) {  keyboard[4] = false;}

        /**********Dusman kontrol tuslari **********/
        if(e.keyCode == 65) {  dusmanKey[0] = false;  }
        if(e.keyCode == 87) {  dusmanKey[1] = false;  }
        if(e.keyCode == 68) {  dusmanKey[2] = false;  }
        if(e.keyCode == 83) {  dusmanKey[3] = false;  }
        if(e.keyCode == 16) {  dusmanKey[4] = false;  }
};






let adam = new Caracter(avci,0,100,768,768,8,8,keyboard);
let cuce = new Caracter(avci,300,600,768,768,8,8,dusmanKey);


function play() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    haritaCiz();
    adam.update();
    cuce.update();

}
setInterval(play, 1000 / 60);



