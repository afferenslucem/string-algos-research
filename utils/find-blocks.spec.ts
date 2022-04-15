import { findBorders } from './find-borders';
import { expect } from 'chai';
import { findBlocks } from './find-blocks';

describe('find blocks', () => {
    it('test 1', () => {
        const text = 'aaaaaa';
        const result = findBlocks(text);

        expect([0, 5, 4, 3, 2, 1]).deep.equal(result);
    });

    it('test 2', () => {
        const text = 'abcabdabcabd';
        const result = findBlocks(text);

        expect([0, 0, 0, 2, 0, 0, 6, 0, 0, 2, 0, 0]).deep.equal(result);
    });

    it('test 3', () => {
        const text = 'abababab';
        const result = findBlocks(text);

        expect([0, 0, 6, 0, 4, 0, 2, 0]).deep.equal(result);
    });

    it('test 4', () => {
        const text = 'aaabaabab';
        const result = findBlocks(text);

        expect([0, 2, 1, 0, 2, 1, 0, 1, 0]).deep.equal(result);
    });

    it('test 5', () => {
        const text = 'abbabaabbaababba';
        const result = findBlocks(text);

        expect([0, 0, 0, 2, 0, 1, 4, 0, 0, 1, 2, 0, 4, 0, 0, 1]).deep.equal(result);
    });
});
