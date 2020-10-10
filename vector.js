class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    subtract(p) {
        return new Vector(this.x - p.x, this.y - p.y);
    }
    
    distance(p) {
        p = this.subtract(p);
        p.x *= -1;
        p.y *= -1;
        return Math.sqrt(Math.pow(p.x,2)+Math.pow(p.y,2));
    }
}