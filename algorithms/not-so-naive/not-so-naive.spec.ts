import { expect } from 'chai';
import { getSubstringNotSoNaive } from './not-so-naive';

describe('getSubstringNotSoNaive', () => {
    it('test 1', () => {
        const text = 'cat';
        const pattern = 'dog';

        const result = getSubstringNotSoNaive(text, pattern);
        expect([]).deep.equal(result);
    })

    it('test 2', () => {
        const text = 'pattern';
        const pattern = 'pattern';

        const result = getSubstringNotSoNaive(text, pattern);
        expect([0]).deep.equal(result);
    })

    it('test 3', () => {
        const text = 'patternpattern';
        const pattern = 'pattern';

        const result = getSubstringNotSoNaive(text, pattern);
        expect([0, 7]).deep.equal(result);
    })

    it('test 4', () => {
        const text = 'aaaaaa';
        const pattern = 'aaa';

        const result = getSubstringNotSoNaive(text, pattern);
        expect([0, 1, 2, 3]).deep.equal(result);
    })

    it ('test 5', () => {
        const text = 'ababcxabdabcxabcxabcde';
        const pattern = 'abcxabcde';

        const result = getSubstringNotSoNaive(text, pattern);
        expect([13]).deep.equal(result);
    })
})
