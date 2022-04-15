import { goodSuffixHeuristic } from './good-suffix-heuristic';
import { assert, expect } from 'chai';

describe('goodSuffixHeuristic', () => {
    it('test 1', () => {
        const pattern = 'cat';

        const shifts = goodSuffixHeuristic(pattern);

        expect([3, 3, 3, 1]).deep.equal(shifts);
    });

    it('test 2', () => {
        const pattern = 'pattern';

        const shifts = goodSuffixHeuristic(pattern);

        expect([7, 7, 7, 7, 7, 7, 7, 1]).deep.equal(shifts);
    });

    it('test 3', () => {
        const pattern = 'aaa';

        const shifts = goodSuffixHeuristic(pattern);

        expect([1, 1, 2, 3]).deep.equal(shifts);
    });

    it('test 4', () => {
        const pattern = 'abaaba';

        const shifts = goodSuffixHeuristic(pattern);

        expect([3, 3, 3, 3, 5, 2, 1]).deep.equal(shifts);
    });
});