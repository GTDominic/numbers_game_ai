class AIFirstFound extends AbstractAI {
    private currentPos: {x: number, y: number};
    private rightDirection: boolean;

    constructor() {
        super('FirstFound');
        this.currentPos = {x: 0, y: 0};
        this.rightDirection = false;
    }
    
    public step(): void {
        board.cross({x: 0,y: 0},{x: 0,y: 1});
    }
}