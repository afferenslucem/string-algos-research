import { badCharacterHeuristic } from '../bad-symbol/array/bad-character-heuristic';
import { goodSuffixHeuristic } from './good-suffix-heuristic';
import { compare, createCounter } from '../../../counter';

export function getSubstringBMGoodSuffix(text: string, pattern: string): number[] {
    const shifts = goodSuffixHeuristic(pattern);

    const result = [];

    let shift = 0;

    // const counter = createCounter('getSubstringBMGoodSuffix');

    while (shift <= (text.length - pattern.length)) {
        let currentIndex = pattern.length - 1;

        while (currentIndex >= 0 && pattern[currentIndex] === text[shift + currentIndex]) {
        // while (currentIndex >= 0 && compare(pattern[currentIndex], text[shift + currentIndex], counter)) {
            currentIndex--;
        }

        if (currentIndex == -1) {
            result.push(shift);

            shift += shifts[0];
        } else {
            shift += shifts[currentIndex + 1];
        }
    }


    return result;
}
