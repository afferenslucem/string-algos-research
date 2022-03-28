function getBorders(text: string): number[] {
    const borders = [0];

    for (let i = 1; i <= text.length; i++) {
        const br = getMaxBr(text.slice(0, i));

        borders.push(br);
    }

    return borders;
}

function getMaxBr(str: string): number {
    let max = 0;

    for (let i = 1; i < str.length; i++) {
        const first = str.slice(0, i);
        const second = str.slice(-i);

        if (first === second && max < i) {
            max = i;
        }
    }

    return max;
}

console.log('aaaaaa', getBorders('aaaaaa').join(', '));
console.log('abcdef', getBorders('abcdef').join(', '));
console.log('abaababaabaab', getBorders('abaababaabaab').join(', '));
console.log('abcabcabcabc', getBorders('abcabcabcabc').join(', '));
console.log('abcabdabcabeabcabdts-n abcabc', getBorders('abcabdabcabeabcabdabcabc').join(', '));
