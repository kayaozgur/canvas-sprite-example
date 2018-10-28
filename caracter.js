/****************** Adam *********************/
class Caracter {
    constructor(image,x,y,adamW,adamH,cols,row,keyboard) {
        this.image = image;
        this.keyboard = keyboard;
        this.x = x;
        this.y = y;
        this.adamX = 0;
        this.adamY = 0;
        this.adamW = adamW;
        this.adamH = adamH;
        this.cols = cols;
        this.row = row;
        this.width = this.adamW / this.cols;
        this.height = this.adamH / this.row;
        this.currentFrame = 0;
        this.sayac = 0;
        this.hareket = 1;
        this.update = function () {
            c.drawImage(this.image, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width / 1.2, this.height / 1.2);
            if (keyboard[4]) {
                this.hareket = 3;
            }
            else {
                this.hareket = 1;
            }
            if (keyboard[0] && !keyboard[1] && !keyboard[2] && !keyboard[3]) {
                this.x -= this.hareket;
                this.adamY = 7;
                this.draw();
            }
            if (!keyboard[0] && keyboard[1] && !keyboard[2] && !keyboard[3]) {
                this.y -= this.hareket;
                this.adamY = 1;
                this.draw();
            }
            if (!keyboard[0] && !keyboard[1] && keyboard[2] && !keyboard[3]) {
                this.x += this.hareket;
                this.adamY = 0;
                this.draw();
            }
            if (!keyboard[0] && !keyboard[1] && !keyboard[2] && keyboard[3]) {
                this.y += this.hareket;
                this.adamY = 4;
                this.draw();
            }
            if (keyboard[0] && keyboard[1] && !keyboard[2] && !keyboard[3]) {
                this.y -= this.hareket * 0.7071067811865475;
                this.x -= this.hareket * 0.7071067811865475;
                this.adamY = 3;
                this.draw();
            }
            if (keyboard[0] && !keyboard[1] && !keyboard[2] && keyboard[3]) {
                this.y += this.hareket * 0.7071067811865475;
                this.x -= this.hareket * 0.7071067811865475;
                this.adamY = 6;
                this.draw();
            }
            if (!keyboard[0] && keyboard[1] && keyboard[2] && !keyboard[3]) {
                this.y -= this.hareket * 0.7071067811865475;
                this.x += this.hareket * 0.7071067811865475;
                this.adamY = 2;
                this.draw();
            }
            if (!keyboard[0] && !keyboard[1] && keyboard[2] && keyboard[3]) {
                this.y += this.hareket * 0.7071067811865475;
                this.x += this.hareket * 0.7071067811865475;
                this.adamY = 5;
                this.draw();
            }
        };
        this.draw = function () {
            this.sayac++;
            if (this.sayac >= 4) {
                c.drawImage(this.image, this.adamX, this.adamY * this.height, this.width, this.height, this.x, this.y, this.width / 1.2, this.height / 1.2);
                this.currentFrame = ++this.currentFrame % this.cols;
                this.adamX = this.currentFrame * this.width;
                this.sayac = 0;
            }
        };
    }
}