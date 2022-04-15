export function findBorders(pattern: string): number[] {
    const borders = new Array(pattern.length);
    borders[0] = 0;

    let currentIndex = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (currentIndex > 0 && pattern[currentIndex] !== pattern[i]) {
            currentIndex = borders[currentIndex - 1];
        }

        if (pattern[currentIndex] === pattern[i]) {
            currentIndex++;
        }

        borders[i] = currentIndex;
    }

    return borders;
}