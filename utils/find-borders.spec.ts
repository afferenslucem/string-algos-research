import { findBorders } from './find-borders';
import { expect } from 'chai';

describe('find borders', () => {
    it('test 1', () => {
        const text = 'aaaaaa';
        const result = findBorders(text);

        expect([0, 1, 2, 3, 4, 5]).deep.equal(result)
    })

    it('test 2', () => {
        const text = 'abcdef';
        const result = findBorders(text);

        expect([0, 0, 0, 0, 0, 0]).deep.equal(result)
    })

    it('test 3', () => {
        const text = 'abaababaabaab';
        const result = findBorders(text);

        expect([0, 0, 1, 1, 2, 3, 2, 3, 4, 5, 6, 4, 5]).deep.equal(result)
    })

    it('test 4', () => {
        const text = 'abcabcabcabc';
        const result = findBorders(text);

        expect([0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).deep.equal(result)
    })

    it('test 5', () => {
        const text = 'abcabdabcabeabcabdabcabc';
        const result = findBorders(text);

        expect([0, 0, 0, 1, 2, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 3]).deep.equal(result)
    })
})
