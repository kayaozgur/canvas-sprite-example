
/***************** Canvas *********************/
const canvas = document.querySelector('canvas');
canvas.width = innerWidth-30;
canvas.height = innerHeight-30;
canvas.style.border = 'solid';
const c = canvas.getContext('2d');

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
let Caracter = function() {
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
    this.hareket = 2;
    
    this.update = function () {
        c.drawImage(this.adam, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width /1.2, this.height/1.2);
        
        if(kosu) { this.hareket = 4 }
        else { this.hareket = 2}

        if (keyStatu[0] && !keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
            this.x -=this.hareket;
            this.adamY = 7;
            this.draw();
           
        }
        
        if (!keyStatu[0] && keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
            this.y -=this.hareket;
            this.adamY = 1;
            this.draw();
        }
        
        if (!keyStatu[0] && !keyStatu[1] && keyStatu[2] && !keyStatu[3]) {
            this.x +=this.hareket;
            this.adamY = 0;
            this.draw();
        }
        
        if (!keyStatu[0] && !keyStatu[1] && !keyStatu[2] && keyStatu[3]) {
            this.y +=this.hareket;
            this.adamY = 4;
            this.draw();
        }

        if (keyStatu[0] && keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
            this.y -=this.hareket*0.7071067811865475;
            this.x -=this.hareket*0.7071067811865475;
            this.adamY = 3;
            this.draw();
        }

        if (keyStatu[0] && !keyStatu[1] && !keyStatu[2] && keyStatu[3]) {
            this.y +=this.hareket*0.7071067811865475;
            this.x -=this.hareket*0.7071067811865475;
            this.adamY = 6;
            this.draw();
        }

        if (!keyStatu[0] && keyStatu[1] && keyStatu[2] && !keyStatu[3]) {
            this.y -=this.hareket*0.7071067811865475;
            this.x +=this.hareket*0.7071067811865475;
            this.adamY = 2;
            this.draw();
        }

        if (!keyStatu[0] && !keyStatu[1] && keyStatu[2] && keyStatu[3]) {
            this.y +=this.hareket*0.7071067811865475;
            this.x +=this.hareket*0.7071067811865475;
            this.adamY = 5;
            this.draw();
        }
        
        
        
        
    }
    
    this.draw = function () {
        this.sayac++;
        if(this.sayac >=4) {
            c.drawImage(this.adam, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width /1.2, this.height/1.2);
            this.currentFrame = ++this.currentFrame % this.cols;
            this.adamX = this.currentFrame * this.width;
            this.sayac = 0;
        }
        
    }
}


let icon = new Caracter();

function play() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    icon.update();
}
setInterval(play, 1000 / 60);



