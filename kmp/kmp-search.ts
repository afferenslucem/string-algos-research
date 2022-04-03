import { findBorders } from './find-borders';
import { compare, createCounter } from '../counter';

export function getSubstringKMP(text: string, pattern: string): number[] {
    const borders = findBorders(pattern);
    const result = [];

    let compareIndex = 0;

    // const counter = createCounter('getSubstringKMP');

    for (let i = 0, length = text.length; i < length; i++) {
        // while (compareIndex > 0 && !compare(text[i], pattern[compareIndex], counter)) {
        while (compareIndex > 0 && text[i] !== pattern[compareIndex]) {
            compareIndex = borders[compareIndex - 1];
        }

        // if (compare(text[i], pattern[compareIndex], counter)) {
        if (text[i] === pattern[compareIndex]) {
            compareIndex++;
        }

        if (compareIndex === pattern.length) {
            result.push(i - compareIndex + 1);
            compareIndex = borders[pattern.length - 1];
        }
    }

    return result;
}
