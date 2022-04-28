import { Suite } from 'benchmark';
import { getSubstringNaive } from '../algorithms/naive/naive';
import { getSubstringKMP } from '../algorithms/kmp/kmp-search';
import { getSubstringNotSoNaive } from '../algorithms/not-so-naive/not-so-naive';
import { getSubstringBMBadCharacter } from '../algorithms/bm/bad-symbol/array/bm-bad-character-search';
import { getSubstringRK } from '../algorithms/rk/rk-search';
import { getAllCounters } from '../counter';

export function measure(name: string, text: string, pattern: string): void {
    console.log(`\n\n${name}\n`)

    const suite = new Suite(name);

     suite
         .add('getSubstringNaive', () => getSubstringNaive(text, pattern))
         .add('getSubstringKMP', () => getSubstringKMP(text, pattern))
         .add('getSubstringNotSoNaive', () => getSubstringNotSoNaive(text, pattern))
         .add('getSubstringBMBadCharacter', () => getSubstringBMBadCharacter(text, pattern))
         .add('getSubstringRK', () => getSubstringRK(text, pattern))
         .on('cycle', (event: any) => console.log(String(event.target)))

     suite.run();

    getAllCounters().forEach(pair => console.log(pair[0], ':', pair[1].count));
}
