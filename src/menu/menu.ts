class Menu {
    public static createMenu(): void {
        push();
        translate(0, height - 100);
        fill(0);
        rect(0, 0, width, 100);
        translate(10, 10);
        push();
        for (let mainelement of menuElements) {
            fill(255, 0, 0);
            rect(0, 0, 100, 50);
            textSize(20);
            fill(0);
            text(mainelement.name, 10, 33);
            if(mainelement.active) {
                push();
                translate(0, -(mainelement.elements.length * 40 + 20));
                rect(0, 0, 500, mainelement.elements.length * 40);
                for (let subelement of mainelement.elements) {
                    fill(255);
                    text(subelement.name, 10, 25);
                    translate(0, 40);
                }
                pop();
            }
            translate(120, 0);
        }
        pop();
        translate(0, 60);
        textSize(20);
        fill(255);
        text(`frameRate: 60`, 10, 18);
        translate(150, 0);
        text(`Current AI: Testing`, 10, 18);
        pop();
    }
}