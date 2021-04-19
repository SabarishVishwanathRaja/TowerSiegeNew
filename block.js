class Block {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.4,

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }

    // block1 = new Block() --> object = new class_name(arg of the construtor)
    display() {
        var pos = this.body.position
        push();

        translate(pos.x, pos.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0, 0, this.w, this.h)
        pop();
    }
}