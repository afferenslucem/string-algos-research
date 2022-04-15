import { compare, createCounter } from '../../counter';

export function getSubstringNotSoNaive(text: string, pattern: string): number[] {
    const result = [];
    // const counter = createCounter('getSubstringNotSoNaive');

    for (let i = 0; i <= text.length - pattern.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            // if (!compare(text[i + j], pattern[j], counter)) {
            if (text[i + j] !== pattern[j]) {
                break;
            }

            if (j === pattern.length - 1) {
                result.push(i);
            }
        }
    }

    return result;
}
