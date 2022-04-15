export function findBlocks(pattern: string): number[] {
    const blocks = new Array(pattern.length);
    blocks[0] = 0;

    for (let i = 1; i < pattern.length; i++) {
        blocks[i] = compareBlock(0, i, pattern);
    }

    return blocks;
}

function compareBlock(first: number, second: number, text: string): number {
    let i = 0;

    while (first + i < text.length && second + i < text.length) {
        if (text[first + i] !== text[second + i]) {
            return i;
        }

        i++;
    }

    return i;
}