abstract class AbstractAI {
    private name: string;
    protected finished: boolean;

    constructor(name: string) {
        this.name = name;
        this.finished = false;
    }

    public abstract step(): void;
    public getName(): string {
        return this.name;
    }
    public getFinishedState(): boolean {
        return this.finished;
    }
}