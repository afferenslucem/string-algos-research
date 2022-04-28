import { badCharacterHeuristic } from './bad-character-heuristic';
import { compare, createCounter } from '../../../../counter';

export function getSubstringBMBadCharacter(text: string, pattern: string): number[] {
    const symbolIndexes = badCharacterHeuristic(pattern, 256);

    const result = [];

    let shift = 0;

    // const counter = createCounter('getSubstringBMBadCharacter');

    while (shift <= (text.length - pattern.length)) {
        let currentIndex = pattern.length - 1;

        while (currentIndex >= 0 && pattern[currentIndex] === text[shift + currentIndex]) {
        // while (currentIndex >= 0 && compare(pattern[currentIndex], text[shift + currentIndex], counter)) {
            currentIndex--;
        }

        if (currentIndex == -1) {
            result.push(shift);

            const indent = (shift + pattern.length < text.length)
                ? pattern.length - (symbolIndexes[text.charCodeAt(shift + pattern.length) % 256] ?? -1)
                : 1;

            shift += indent;
        } else {
            // Если у нас нарушается совпадение паттерна, то мы сдвигаем паттерн так, чтобы близжайшее правое вхождение символа в паттерне совпало с текстом
            // Если символ текста не содержится в паттерне, то мы просто перекидываем петтерн за этот символ.

            const indent = symbolIndexes[text.charCodeAt(shift + currentIndex) % 256] ?? -1;

            shift += Math.max(1, currentIndex - indent);
        }
    }


    return result;
}
