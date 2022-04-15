export function badCharacterHeuristic(pattern: string): Map<string, number> {
    const result = new Map<string, number>();

    for(let i = 0; i < pattern.length; i++) {
       result.set(pattern[i], i);
    }

    return result;
}
