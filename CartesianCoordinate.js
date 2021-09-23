var point = {
    x:1.0,
    y:1.0,
    get r() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    },
    set polarCoordinates(pc){
        this.x = pc.r*Math.cos(pc.theta);
        this.y = pc.r*Math.sin(pc.theta);
    }
};
console.log(point.r); //1.4142135623730951
console.log(point.theta); //0.7853981633974483