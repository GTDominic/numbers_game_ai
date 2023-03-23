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
    /**
     * Crosses two elements and checks wether they are crossable
     * @param v1 First value to cross
     * @param v2 Second value to cross
     * @returns boolean if they are crossed
     */
    public cross(v1: Coordinate, v2: Coordinate): boolean {
        if(!this.board[v1.y][v1.x].visible) return false;
        if(!this.board[v2.y][v2.x].visible) return false;
        if(this.board[v1.y][v1.x].value != this.board[v2.y][v2.x].value) {
            if(this.board[v1.y][v1.x].value + this.board[v2.y][v2.x].value != 10) return false;
        }
        console.log(this.findBottomNeighbour(v1.x, v1.y + 1));
        console.log(v2);
        if(
            compareCoordinates(this.findTopNeighbour(v1.x, v1.y - 1), v2) && 
            compareCoordinates(this.findBottomNeighbour(v1.x, v1.y + 1), v2) &&
            compareCoordinates(this.findRightNeighbour(v1.x + 1, v1.y), v2) &&
            compareCoordinates(this.findLeftNeighbour(v1.x - 1, v1.y), v2)
        ) return false;
        console.log("Test");
        this.board[v1.y][v1.x].visible = false;
        this.board[v2.y][v2.x].visible = false;
        return true;
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
        if(this.board[y][x] == undefined) return null;
        return this.board[y][x].value;
    }
    public logBoard(): void {
        console.log(this.board);
    }
    /**
     * Function to find the top neighbour of an element
     * @param x X Coordinate of the element one above
     * @param y Y Coordinate of the element one above (can be -1)
     * @returns X and Y Coordinate of the neighbour (null if no neighbour)
     */
    public findTopNeighbour(x: number, y: number): Coordinate {
        if(y < 0) return null;
        if(!this.board[y][x].visible) return this.findTopNeighbour(x, y - 1);
        return {x: x, y: y};
    }
    /**
     * Function to find the bottom neighbour of an element
     * @param x X Coordinate of the element one below
     * @param y Y Coordinate of the element one below
     * @returns X and Y Coordinate of the neighbour (null if no neighbour)
     */
    public findBottomNeighbour(x: number, y: number): Coordinate {
        if(y > this.board.length - 1) return null;
        if(y === this.board.length - 1 && x > this.board[y].length - 1) return null;
        if(!this.board[y][x].visible) return this.findBottomNeighbour(x, y + 1);
        return {x: x, y: y};
    }
    /**
     * Function to find the left neighbour of an element
     * @param x X Coordinate of the element one to the left (can be -1)
     * @param y Y Coordinate of the element one to the left
     * @returns X and Y Coordinate of the neighbour (null if no neighbour)
     */
    public findLeftNeighbour(x: number, y: number): Coordinate {
        if(y < 0) return null;
        if(x < 0) return this.findLeftNeighbour(8, y - 1);
        if(!this.board[y][x].visible) return this.findLeftNeighbour(x - 1, y);
        return {x: x, y: y};
    }
    /**
     * Function to find the right neighbour of an element
     * @param x X Coordinate of the element one to the right
     * @param y Y Coordinate of the element one to the right
     * @returns X and Y Coordinate of the neighbour (null if no neighbour)
     */
    public findRightNeighbour(x: number, y: number): Coordinate {
        if(y > this.board.length - 1) return null;
        if(y === this.board.length - 1 && x > this.board[y].length - 1) return null;
        if(x > 8) return this.findRightNeighbour(0, y + 1);
        if(!this.board[y][x].visible) return this.findRightNeighbour(x + 1, y);
        return {x: x, y: y};
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