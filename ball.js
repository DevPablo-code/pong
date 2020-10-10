class Ball {
    constructor(x, y, xSpeed, ySpeed){
        this.pos = new Vector(x, y);
        this.r = 5;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    
    draw() {
        disk(this.pos,this.r)
    }
    
    move() {
        this.pos.x += this.xSpeed;
        this.pos.y += this.ySpeed;
    }
    
    edges() {
        if (this.pos.x < 0) {
            this.pos.x = width/2;
            this.pos.y = height/2;
            score2++;
        }
           
        if (this.pos.x > width) {
            this.pos.x = width/2;
            this.pos.y = height/2;
            score1++;
        }
        if (this.pos.y < 0 || this.pos.y > height)
            this.ySpeed *= -1;
    }
    
    checkPaddle(p) {
        if (this.pos.distance(p.pos) < this.r) {
            console.log("hit")
            this.xSpeed *= -1;
        } else if(this.pos.distance(new Vector(p.pos.x+p.width,p.pos.y)) < this.r) {
            console.log("hit")
            this.xSpeed *= -1;
        } else if(this.pos.distance(new Vector(p.pos.x,p.pos.y + p.height)) < this.r){
            console.log("hit")
            this.xSpeed *= -1;
        } else if(this.pos.distance(new Vector(p.pos.x+p.width,p.pos.y+p.height)) < this.r) {
            console.log("hit")
            this.xSpeed *= -1;
        }
    }
}