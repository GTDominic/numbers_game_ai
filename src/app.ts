function setup() {
    createCanvas(windowWidth, windowHeight);
    board = new Board;
    aiList = [new AIFirstFound, new AITesting];
    for(let i = 0; i < menuElements.length; i++) {
        if(menuElements[i].name != 'AI') continue;
        for(let j = 0; j < aiList.length; j++) {
            menuElements[i].elements.push({
                name: aiList[j].getName(),
                func: () => {currentAI = j;}
            });
        }
    }
    console.log(menuElements);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    frameRate(globalFrameRate);
    background(100);
    board.drawBoard();
    Menu.createMenu();
}

function mouseClicked() {
    Menu.clickHandler();
}

// For development purposes only
function testcall(stringy: string = '') {
    console.log('Testcall! ' + stringy);
}