class Chain {
    constructor(body1, body2) {
        var options = {
            bodyA: body1, 
            bodyB: body2,
            stiffness: 0.04, 
            length: 10,
        }
    
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    drawLine() {
        strokeWeight(4);
        line(bird.body.position.x, bird.body.position.y, newLog.body.position.x, newLog.body.position.y);
    }
}