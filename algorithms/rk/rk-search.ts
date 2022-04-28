import { compare, Counter, createCounter } from '../../counter';


export function getSubstringRK(text: string, pattern: string): number[] {
    const result = [];

    const alphabetSize = 256;
    const mod = 9973;

    let patternHash = pattern.charCodeAt(0) % mod;
    let textHash = text.charCodeAt(0) % mod;

    let firstIndexHash = 1;

    for(let i = 1; i < pattern.length; i++)
    {
        patternHash *= alphabetSize;
        patternHash += pattern.charCodeAt(i);
        patternHash %= mod;

        textHash *= alphabetSize;
        textHash += text.charCodeAt(i);
        textHash %= mod;

        firstIndexHash *= alphabetSize;
        firstIndexHash %= mod;
    }

    // const counter = createCounter('getSubstringRK');

    for (let i = 0; i <= text.length - pattern.length; i++) {
        // if (compare(patternHash, textHash, counter) && compareText(text, i, pattern, counter)) {
        if (patternHash === textHash && compareText(text, i, pattern)) {
            result.push(i);
        }

        if (i === text.length - pattern.length) break;

        textHash -= (text.charCodeAt(i) * firstIndexHash) % mod;
        textHash += mod;
        textHash *= alphabetSize;
        textHash += text.charCodeAt(i + pattern.length);
        textHash %= mod;
    }

    return result;
}

// function compareText(text: string, index: number, pattern: string, counter: Counter): boolean {
function compareText(text: string, index: number, pattern: string): boolean {
    for (let i = 0; i < pattern.length; i++) {
        // if (!compare(pattern[i], text[index + i], counter)) {
        if (pattern[i] !== text[index + i]) {
            return false;
        }
    }

    return true;
}
