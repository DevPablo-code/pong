class Paddle {
    constructor(x, y, width, height) {
       this.pos = new Vector(x, y);
       this.width = width;
       this.height = height;
       this.yChange = 0;
    }
    
    move() {
       this.pos.y += this.yChange;
    }
    
    update(step) {
        this.yChange = step;
    }
    draw() {
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    
    edges() {
        if (this.pos.y < 0) {
            this.pos.y = 0;
        } else if (this.pos.y > height-this.height) {
            this.pos.y = height-this.height;
        }
    }
}