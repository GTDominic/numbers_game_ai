function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(100);
    Menu.createMenu();
}

// For development purposes only
function testcall(stringy: string = '') {
    console.log('Testcall! ' + stringy);
}