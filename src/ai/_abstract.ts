abstract class AbstractAI {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract step(): void;
    public getName(): string {
        return this.name;
    }
}