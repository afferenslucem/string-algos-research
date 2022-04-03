export function findBorders(text: string): number[] {
    const borders = new Array(text.length);
    borders[0] = 0;

    for (let i = 1, length = text.length; i < length; i++) {
        borders[i] = findMaxBorder(text, i + 1);
    }

    return borders;
}

function findMaxBorder(text: string, length: number): number {
    let max = 0;

    for (let i = 0; i < length - 1; i++) {
        if (isPartsEqually(text, 0, length - i - 1, i + 1)) {
            max = i + 1;
        }
    }

    return max;
}

function isPartsEqually(text: string, firstIndex: number, secondIndex: number, length: number): boolean {
    for(let i = 0; i < length; i++) {
        if (text[firstIndex + i] !== text[secondIndex + i]) {
            return false;
        }
    }

    return true;
}
