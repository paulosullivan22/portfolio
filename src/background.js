class Background {
    constructor() {
      this.x1 = 0;      // Sets initial position of two images for each level of foreground
      this.x11 = WIDTH;
      this.x111 = WIDTH*2;
      this.x1111 = WIDTH*3
      
      this.x2 = 0;
      this.x22 = WIDTH;
      this.x222 = WIDTH*2
      this.x2222 = WIDTH*3    

      this.x3 = 0;
      this.x33 = WIDTH;
      this.x333 = WIDTH*2;
      this.x3333 = WIDTH*3
    }
  
    setup() {
    //   this.bgImageLayer1 = loadImage("assets/background/foreground.png");
    //   this.bgImageLayer2 = loadImage("assets/background/back-buildings.png");
    //   this.bgImageLayer3 = loadImage("assets/background/far-buildings.png");
    }
  
    draw() {
        clear()

        // image(this.bgImageLayer3, this.x33, 0, WIDTH, HEIGHT)
        // image(this.bgImageLayer3, this.x3, 0, WIDTH, HEIGHT)


        // image(this.bgImageLayer2, this.x22, 0, WIDTH, HEIGHT)
        // image(this.bgImageLayer2, this.x2, 0, WIDTH, HEIGHT)

        // image(this.bgImageLayer1, this.x11, 0, WIDTH, HEIGHT)
        // image(this.bgImageLayer1, this.x1, 0, WIDTH, HEIGHT)


        // use for loop to count to 4, 
        // for each iteration, add a new plate to image scroll
        // each image should have different features
       
        
        fill(color('red'))
        rect(this.x33, HEIGHT - 400, WIDTH, 400)
        rect(this.x3, HEIGHT - 400, WIDTH, 400)

        fill(color('green'))
        rect(this.x22, HEIGHT - 300, WIDTH, 300)
        rect(this.x2, HEIGHT - 300, WIDTH, 300)

        fill(color('blue'))
        rect(this.x11, HEIGHT - 200, WIDTH, 200)
        rect(this.x1, HEIGHT - 200, WIDTH, 200)

        fill(color('orange'))
        rect(this.x111, HEIGHT - 200, WIDTH, 200)
        rect(this.x222, HEIGHT - 300, WIDTH, 300)

        fill(color('purple'))
        rect(this.x1111, HEIGHT - 200, WIDTH, 200)
        rect(this.x2222, HEIGHT - 300, WIDTH, 300)

        
        // Loops through images once one has fully passed by screen
        // if (this.x1 <= -WIDTH) {
        //     this.x1 = WIDTH
        // }

        // if (this.x11 <= -WIDTH) {
        //     this.x11 = WIDTH;
        // }

        // if (this.x2 <= -WIDTH) {
        //     this.x2 = WIDTH;
        // }

        // if (this.x22 <= -WIDTH) {
        //     this.x22 = WIDTH;
        // }

        if (this.x3 <= -WIDTH) {
            this.x3 = WIDTH;
        }

        if (this.x33 <= -WIDTH) {
            this.x33 = WIDTH;
        }

        // loop through to add speeds

        if (keyIsDown(RIGHT_ARROW)) {
            this.x1 -= 4.5;
            this.x11 -= 4.5;
            this.x111 -= 4.5;
            this.x1111 -= 4.5;
            this.x2 -= 3.5;
            this.x22 -= 3.5;
            this.x222 -= 3.5;
            this.x2222 -= 3.5;
            this.x3 -= 2.5;
            this.x33 -= 2.5;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.x1 += 4.5;
            this.x11 += 4.5;
            this.x111 += 4.5
            this.x1111 += 4.5
            this.x2 += 3.5;
            this.x22 += 3.5;
            this.x222 += 3.5
            this.x2222 += 3.5
            this.x3 += 2.5;
            this.x33 += 2.5;
        }
    }
  }