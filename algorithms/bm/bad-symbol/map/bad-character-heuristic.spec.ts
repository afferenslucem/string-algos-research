import { badCharacterHeuristic } from './bad-character-heuristic';
import { expect } from 'chai';

describe('badCharacterHeuristic -- Map', () => {
    it ('test 1', () => {
        const pattern = 'dog';

        const result = badCharacterHeuristic(pattern);

        expect([['d', 0], ['o', 1], ['g', 2]]).deep.equal(Array.from(result.entries()));
    })

    it ('test 2', () => {
        const pattern = 'dogdogcat';

        const result = badCharacterHeuristic(pattern);

        expect([['d', 3], ['o', 4], ['g', 5], ['c', 6], ['a', 7], ['t', 8]]).deep.equal(Array.from(result.entries()));
    })
})
