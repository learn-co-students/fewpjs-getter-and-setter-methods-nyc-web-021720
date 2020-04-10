// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter(){
        return this.diameter = this.radius*2
    }

    get circumference(){
        return this.circumference = this.radius*2*Math.PI
    }

    get area(){
        return this.area = (this.radius*this.radius)*Math.PI
    }

    set diameter(diameter){
        return this.radius = diameter/2
    }

    set circumference(circumference){
        return this.radius = circumference/Math.PI/2
    }

    set area(area){
        return this.radius = Math.sqrt((area/Math.PI))
    }

}