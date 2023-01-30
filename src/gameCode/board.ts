class Board {
    private board: Array<Array<{value: number, visible: boolean}>>;
    private startArray: Array<number>;

    constructor() {
        this.board = [[]];
    }

    public replaceBoard(values: Array<number>): void {
        this.board = [[]];
        this.startArray = [...values];
        this.appendValues(values);
    }
    public createRandomBoard(numbers: number, start: number): void {
        let newBoard: Array<number> = [];
        for(let i = 0; i < numbers; i++) newBoard.push(randomIntFromInterval(start,9));
        this.replaceBoard(newBoard);
    }
    public restart(): void {
        this.board = [[]];
        this.appendValues(this.startArray);
    }
    public check(): void {
        let values: Array<number> = [];
        for(let row of this.board) {
            for(let element of row) {
                if(!element.visible) continue;
                values.push(element.value);
            }
        }
        this.appendValues(values);
    }
    public getValue(x: number, y: number): number {
        return this.board[y][x].value;
    }
    public logBoard(): void {
        console.log(this.board);
    }
    private appendValues(values: Array<number>) {
        let y = this.board.length - 1;
        for(let value of values) {
            if(this.board[y].length === 9) {
                this.board.push([]);
                y++;
            }
            this.board[y].push({value: value, visible: true});
        }
    }
}