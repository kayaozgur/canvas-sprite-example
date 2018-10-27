
/***************** Canvas *********************/
const canvas = document.querySelector('canvas');
canvas.width = innerWidth-30;
canvas.height = innerHeight-30;
canvas.style.border = 'solid';
const c = canvas.getContext('2d');

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
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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


        }

    }

}


/************ Kontroller *********************/
let keyStatu = [false,false,false,false];
let kosu = false;

document.addEventListener('keydown',tusdown)
function tusdown(e) {
        if(e.keyCode == 37) {  keyStatu[0] = true;  }
        if(e.keyCode == 38) {  keyStatu[1] = true;  }
        if(e.keyCode == 39) {  keyStatu[2] = true;  }
        if(e.keyCode == 40) {  keyStatu[3] = true;  }
        if(e.keyCode == 32) {  kosu = true;  }
};

document.addEventListener('keyup', tusup)
function tusup(e) {
        if(e.keyCode == 37) {  keyStatu[0] = false;  }
        if(e.keyCode == 38) {  keyStatu[1] = false;  }
        if(e.keyCode == 39) {  keyStatu[2] = false;  }
        if(e.keyCode == 40) {  keyStatu[3] = false;  }
        if(e.keyCode == 32) {  kosu = false;}
};

/****************** Karakter *********************/
class Adam {
    constructor() {
        this.adam = new Image();
        this.adam.src = 'image/avci.png';
        this.x = 0;
        this.y = 50;
        this.adamX = 0;
        this.adamY = 0;
        this.adamW = 768;
        this.adamH = 768;
        this.cols = 8;
        this.row = 8;
        this.width = this.adamW / this.cols;
        this.height = this.adamH / this.row;
        this.currentFrame = 0;
        this.sayac = 0;
        this.hareket = 1;
        this.update = function () {
            c.drawImage(this.adam, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width / 1.2, this.height / 1.2);
            if (kosu) {
                this.hareket = 3;
            }
            else {
                this.hareket = 1;
            }
            if (keyStatu[0] && !keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
                this.x -= this.hareket;
                this.adamY = 7;
                this.draw();
            }
            if (!keyStatu[0] && keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
                this.y -= this.hareket;
                this.adamY = 1;
                this.draw();
            }
            if (!keyStatu[0] && !keyStatu[1] && keyStatu[2] && !keyStatu[3]) {
                this.x += this.hareket;
                this.adamY = 0;
                this.draw();
            }
            if (!keyStatu[0] && !keyStatu[1] && !keyStatu[2] && keyStatu[3]) {
                this.y += this.hareket;
                this.adamY = 4;
                this.draw();
            }
            if (keyStatu[0] && keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
                this.y -= this.hareket * 0.7071067811865475;
                this.x -= this.hareket * 0.7071067811865475;
                this.adamY = 3;
                this.draw();
            }
            if (keyStatu[0] && !keyStatu[1] && !keyStatu[2] && keyStatu[3]) {
                this.y += this.hareket * 0.7071067811865475;
                this.x -= this.hareket * 0.7071067811865475;
                this.adamY = 6;
                this.draw();
            }
            if (!keyStatu[0] && keyStatu[1] && keyStatu[2] && !keyStatu[3]) {
                this.y -= this.hareket * 0.7071067811865475;
                this.x += this.hareket * 0.7071067811865475;
                this.adamY = 2;
                this.draw();
            }
            if (!keyStatu[0] && !keyStatu[1] && keyStatu[2] && keyStatu[3]) {
                this.y += this.hareket * 0.7071067811865475;
                this.x += this.hareket * 0.7071067811865475;
                this.adamY = 5;
                this.draw();
            }
        };
        this.draw = function () {
            this.sayac++;
            if (this.sayac >= 4) {
                c.drawImage(this.adam, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width / 1.2, this.height / 1.2);
                this.currentFrame = ++this.currentFrame % this.cols;
                this.adamX = this.currentFrame * this.width;
                this.sayac = 0;
            }
        };
    }
}


let icon = new Adam();

function play() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    haritaCiz();
    icon.update();
}
setInterval(play, 1000 / 60);



