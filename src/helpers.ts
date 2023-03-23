function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function compareCoordinates(a: Coordinate, b: Coordinate): boolean {
    if(a == null || b == null) return false;
    let xa = a.x;
    let xb = b.x;
    let ya = a.y;
    let yb = b.y;
    return xa === xb && ya === yb;
}