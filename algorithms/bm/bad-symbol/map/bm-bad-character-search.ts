import { badCharacterHeuristic } from './bad-character-heuristic';
import { compare, createCounter } from '../../../../counter';

export function getSubstringBMBadCharacter(text: string, pattern: string): number[] {
    const symbolIndexes = badCharacterHeuristic(pattern);

    const result = [];

    let shift = 0;

    // const counter = createCounter('getSubstringBMBadCharacter');

    while (shift <= (text.length - pattern.length)) {
        let currentIndex = pattern.length - 1;

        // while (currentIndex >= 0 && compare(pattern[currentIndex], text[shift + currentIndex], counter)) {
        while (currentIndex >= 0 && pattern[currentIndex] === text[shift + currentIndex]) {
            currentIndex--;
        }

        if (currentIndex == -1) {
            result.push(shift);

            const indent = (shift + pattern.length < text.length)
                ? pattern.length - (symbolIndexes.get(text[shift + pattern.length]) ?? -1)
                : 1;

            shift += indent;
        } else {
            // Если у нас нарушается совпадение паттерна, то мы сдвигаем паттерн так, чтобы близжайшее правое вхождение символа в паттерне совпало с текстом
            // Если символ текста не содержится в паттерне, то мы просто перекидываем петтерн за этот символ.

            const indent = symbolIndexes.get(text[shift + currentIndex]) ?? -1;

            shift += Math.max(1, currentIndex - indent);
        }
    }


    return result;
}
