interface BoardElement {
    value: number,
    visible: boolean       
}

class Board {
    private board: Array<Array<BoardElement>>;
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
    public drawBoard(): void {
        push();
        for(let row of this.board) {
            push();
            for(let element of row) {
                element.visible ? fill(0) : fill(200);
                rect(0, 0, 50, 30);
                this.getTextFillColor(element);
                textSize(20);
                text(element.value, 20, 22);
                translate (50, 0);
            }
            pop();
            translate(0, 30);
        }
        pop();
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
    private getTextFillColor(element: BoardElement): void {
        if(!element.visible) {
            fill(50);
            return;
        }
        switch (element.value) {
            case 0:
                fill(20, 71, 255);
                return;
            case 1:
            case 9:
                fill(153, 51, 255);
                return;
            case 2:
            case 8:
                fill(55, 222, 122);
                return;
            case 3:
            case 7:
                fill(201, 0, 0);
                return;
            case 4:
            case 6:
                fill(255, 203, 48);
                return;
            case 5:
                fill(165, 97, 51);
                return;
            default:
                fill(255);
                return;
        }
    }
}