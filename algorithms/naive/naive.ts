import { compare, createCounter } from '../../counter';

export function getSubstringNaive(text: string, pattern: string): number[] {
    const result = [];
    // const counter = createCounter('getSubstringNaive');

    for (let i = 0; i <= text.length - pattern.length; i++) {
        let flag = true;
        // Ну о-о-о-очень наивный алгоритм
        for (let j = 0; j < pattern.length; j++) {
            // if (!compare(text[i + j], pattern[j], counter)) {
            if (text[i + j] !== pattern[j]) {
                flag = false;
            }

            if (j === pattern.length - 1 && flag) {
                result.push(i);
            }
        }
    }

    return result;
}
