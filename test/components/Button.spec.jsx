import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Button } from '../../src/components';

describe('<Button />', () => {
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Button onClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('changes warning type button', () => {
    const wrapper = shallow(<Button warning />);
    expect(wrapper.find('.btn-warning')).to.have.length(1);
  });
});
