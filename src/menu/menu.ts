class Menu {
    public static createMenu(): void {
        push();
        translate(0, height - 70);
        fill(0);
        rect(0, 0, width, 70);
        pop();
    }
}