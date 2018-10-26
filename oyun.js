
const canvas = document.querySelector('canvas');
canvas.width = innerWidth - 40;
canvas.height = innerHeight -40;
canvas.style.border = 'solid';

const c = canvas.getContext('2d');

const keyStatu = [false,false,false,false];

document.addEventListener('keydown',tusdown)
function tusdown(e) {
        if(e.keyCode == 37) {  keyStatu[0] = true;  }
        if(e.keyCode == 38) {  keyStatu[1] = true;  }
        if(e.keyCode == 39) {  keyStatu[2] = true;  }
        if(e.keyCode == 40) {  keyStatu[3] = true;  }
};

document.addEventListener('keyup', tusup)
function tusup(e) {
        if(e.keyCode == 37) {  keyStatu[0] = false;  }
        if(e.keyCode == 38) {  keyStatu[1] = false;  }
        if(e.keyCode == 39) {  keyStatu[2] = false;  }
        if(e.keyCode == 40) {  keyStatu[3] = false;  }
};
    

let Caracter = function() {
    this.adam = new Image();
    this.adam.src = 'image/adam.png';
    
    this.x = 0;
    this.y = 50;
    this.adamX = 0;
    this.adamY = 0;
    this.adamW = 864;
    this.adamH = 280;
    this.width = this.adamW / 8;
    this.height = this.adamH / 2;
    this.currentFrame = 0;
    this.cols = 8;
    this.sayac = 0;
    this.hareket = 1.15;
    
    this.update = function () {
        c.drawImage(this.adam, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width / 2, this.height / 2);
        
        if (keyStatu[0] && !keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
            this.x -=3;
            this.adamY = 1;
            this.draw();
            
        }
        
        if (!keyStatu[0] && keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
            this.y -=3;
            this.adamY = 0;
            this.draw();
        }
        
        if (!keyStatu[0] && !keyStatu[1] && keyStatu[2] && !keyStatu[3]) {
            this.x +=3;
            this.adamY = 0;
            this.draw();
        }
        
        if (!keyStatu[0] && !keyStatu[1] && !keyStatu[2] && keyStatu[3]) {
            this.y +=3;
            this.adamY = 0;
            this.draw();
        }

        if (keyStatu[0] && keyStatu[1] && !keyStatu[2] && !keyStatu[3]) {
            this.y -=3;
            this.x -=3;
            this.adamY = 1;
            this.draw();
        }

        if (keyStatu[0] && !keyStatu[1] && !keyStatu[2] && keyStatu[3]) {
            this.y +=3;
            this.x -=3;
            this.adamY = 1;
            this.draw();
        }

        if (!keyStatu[0] && keyStatu[1] && keyStatu[2] && !keyStatu[3]) {
            this.y -=3;
            this.x +=3;
            this.adamY = 0;
            this.draw();
        }

        if (!keyStatu[0] && !keyStatu[1] && keyStatu[2] && keyStatu[3]) {
            this.y +=3;
            this.x +=3;
            this.adamY = 0;
            this.draw();
        }
        
        
        
        
    }
    
    this.draw = function () {
        this.sayac++;
        if(this.sayac >=5) {
            c.drawImage(this.adam, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width / 2, this.height / 2);
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



