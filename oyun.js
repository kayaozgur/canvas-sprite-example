function oyun() {

    const canvas = document.querySelector('canvas');
    canvas.width = 800;
    canvas.height = 300;
    canvas.style.border = 'solid';

    const c = canvas.getContext('2d');

    let x = 0;
    let y = 50;
    let adamX = 0;
    let adamY = 0;
    let adamW = 864;
    let adamH = 280;
    let width = adamW/8;
    let height = adamH / 2;
    let currentFrame = 0;
    let cols = 8;
    let sayac = 0;
    let hareket = 1.5;
   

    let adam = new Image();
    adam.src = 'image/adam.png';


    
    function draw() {
        if(x + width/2 >= canvas.width || x < 0) {
            hareket = -hareket;
            if(hareket < 0) adamY = 1;
            else adamY = 0;
            
        }
        sayac++;

        if(sayac >= 7) {

            c.clearRect(0, 0, canvas.width, canvas.height);
    
            c.drawImage(adam, adamX, adamY*height,width, height, x, y, width/2, height/2);
            currentFrame = ++currentFrame % cols;
            adamX = currentFrame * width;
            sayac = 0;
            
        }
        
        x += hareket;
    }

let game = setInterval(draw, 1000 / 60);


}