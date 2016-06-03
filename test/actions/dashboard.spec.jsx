import { assert } from 'chai';

import { addMessage, removeMessage } from '../../src/actions/dashboard';
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../../src/constants';
import tokenize from '../../src/helpers/tokenize';

describe('dashboard', () => {
  it('action add message', () => {
    let text = 'Hello world';
    let action = {
      type: ADD_MESSAGE,
      text
    };
    assert.deepEqual(addMessage(text), action);
  });

  it('action remove message', () => {
    let id = tokenize();
    let action = {
      type: REMOVE_MESSAGE,
      id
    };
    assert.deepEqual(removeMessage(id), action);
  });
});
