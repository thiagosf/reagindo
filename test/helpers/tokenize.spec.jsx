import { assert } from 'chai';

import tokenize from '../../src/helpers/tokenize';

describe('tokenize', () => {
  it('generate token', () => {
    assert.typeOf(tokenize(), 'number');
  });
});
