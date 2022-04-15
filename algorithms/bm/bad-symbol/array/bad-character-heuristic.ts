export function badCharacterHeuristic(pattern: string, arraySize: number): number[] {
    const result = new Array(arraySize);

    for(let i = 0; i < pattern.length; i++) {
       result[pattern.charCodeAt(i) % arraySize] = i;
    }

    return result;
}
