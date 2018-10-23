


const canvas = document.querySelector('canvas');
canvas.width = innerWidth - 15;
canvas.height = 300;
canvas.style.border = 'solid';

const c = canvas.getContext('2d');


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
        
        if (this.x + this.width / 2 >= canvas.width || this.x < 0) {
            this.hareket = -this.hareket;
            if (this.hareket < 0) this.adamY = 1;
            else this.adamY = 0;
            
        }
        this.sayac++;
        if (this.sayac >= 7) {
            this.draw();
            this.sayac = 0;
            
        }
        this.x += this.hareket;
        
        
    }
    
    this.draw = function () {
        
        c.clearRect(0, 0, canvas.width, canvas.height);
        
        c.drawImage(this.adam, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width / 2, this.height / 2);
        this.currentFrame = ++this.currentFrame % this.cols;
        this.adamX = this.currentFrame * this.width;
        
    }
}
let icon = new Caracter();
console.log(icon);

function play() {
    icon.update();
}
setInterval(play, 1000 / 60);



