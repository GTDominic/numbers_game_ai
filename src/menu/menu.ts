let createBoardActive: boolean = true;

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
        text(`frameRate: ${globalFrameRate}`, 10, 18);
        translate(150, 0);
        text(`Current AI: Testing`, 10, 18);
        translate(300, 0);
        text(`Cursor position: ${mouseX}, ${mouseY}`, 10, 18);
        pop();
        if(createBoardActive) this.createCreateMenu();
    }
    private static createCreateMenu(): void {
        push();
        translate((width - 600) / 2, 200);
        fill(0);
        rect(0, 0, 600, 700);
        textSize(20);
        fill(255);
        text('X', 570, 25);
        translate(20, 60);
        for(let i = 0; i < boardOptions.length; i++) {
            fill(255, 0, 0);
            rect(0, 0, 270, 50);
            textSize(20);
            fill(0);
            text(boardOptions[i].name, 10, 33);
            if(i % 2 === 0) translate(290, 0);
            else translate(-290, 70);
        }
        pop();
    }
    public static clickHandler(): void {
        if(mouseY > height - 90 && mouseY < height - 40) return this.clickMainMenu();
        if(createBoardActive && mouseY > 200 && mouseY < 900) return this.clickCreateMenu();
        for(let i = 0; i < menuElements.length; i++) {
            if (!menuElements[i].active) continue;
            this.clickSubMenu(10 + i * 120, menuElements[i].elements);
        }
        
    }
    private static clickMainMenu(): void {
        createBoardActive = false;
        for(let i = 0; i < menuElements.length; i++) {
            if(mouseX < 10 + i * 120 || mouseX > 110 + i * 120) continue;
            if(menuElements[i].active) {
                menuElements[i].active = false;
                continue;
            }
            for(let element of menuElements) element.active = false;
            menuElements[i].active = true;
        }
    }
    private static clickCreateMenu(): void {
        if(mouseY > 200 && mouseY < 232 && mouseX < (width - 600) / 2 + 600 && mouseX > (width - 600) / 2 + 560) {
            createBoardActive = false;
        }
        for(let i = 0; i < boardOptions.length; i++) {
            if(mouseY < 260 + Math.floor(i / 2) * 70 || mouseY > 310 + Math.floor(i / 2) * 70) continue;
            if(i % 2 === 0 && (mouseX < (width - 600) / 2 + 20 || mouseX > (width - 600) / 2 + 290)) continue;
            if(i % 2 != 0 && (mouseX < (width - 600) / 2 + 310 || mouseX > (width - 600) / 2 + 580)) continue;
            boardOptions[i].func();
            createBoardActive = false;
        }
    }
    private static clickSubMenu(x: number, elements: Array<MenuElement>): void {
        if(mouseX < x || mouseX > x + 500) return;
        for(let i = 0; i < elements.length; i++) {
            if(mouseY < height - 110 - 40 * (elements.length - i)) continue;
            if(mouseY > height - 70 - 40 * (elements.length - i)) continue;
            elements[i].func();
        }
    }
    public static changeFrameRate(up: boolean): void {
        const frameRates = [1, 2, 3, 4, 5, 7, 10, 15, 20, 30, 40, 60];
        let element = 0;
        for(let i = 0; i < frameRates.length; i++) if(frameRates[i] === globalFrameRate) element = i;
        if(element === 0 && !up) return;
        if(element === frameRates.length - 1 && up) return;
        if(up) globalFrameRate = frameRates[element + 1];
        else globalFrameRate = frameRates[element - 1];
    }
    public static openCreateMenu(): void {
        for(let element of menuElements) element.active = false;
        createBoardActive = true;
    }
}