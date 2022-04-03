export class Counter {
    public get count(): number {
        return this._count;
    }

    public readonly name: string;
    private _count: number = 0;

    public constructor(name: string) {
        this.name = name;
    }

    public increase(): void {
        this._count++;
    }
}

const counterMap = new Map<string, Counter>();

export function createCounter(name: string): Counter {
    const counter = new Counter(name);

    counterMap.set(name, counter);

    return counter;
}

export function getAllCounters(): [string, Counter][] {
    return Array.from(counterMap.entries());
}

export function compare<T>(first: T, second: T, counter: Counter): boolean {
    counter.increase();

    return first === second;
}
