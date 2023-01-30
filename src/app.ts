function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    frameRate(globalFrameRate);
    background(100);
    Menu.createMenu();
}

function mouseClicked() {
    Menu.clickHandler();
}

// For development purposes only
function testcall(stringy: string = '') {
    console.log('Testcall! ' + stringy);
}