import React from 'react';
import { shallow } from 'enzyme';

import VirtualCard from './index';

describe('VirtualCard tests', () => {
  it('renders without crashing', () => {
    shallow(<VirtualCard cvv="1212" expiryDate="testDate" />);
  });

  it('renders className', () => {
    const wrapper = shallow(
      <VirtualCard cvv="1212" expiryDate="testDate" className="testClass" />
    );
    expect(wrapper.hasClass('testClass')).toBeTruthy();
  });

  it('renders expiry date', () => {
    const wrapper = shallow(
      <VirtualCard cvv="1212" expiryDate="testDate" className="testClass" />
    );
    expect(wrapper.find('[data-testid="expiryDate"]').text()).toEqual(
      'Expires testDate'
    );
  });

  it('renders cvv date', () => {
    const wrapper = shallow(
      <VirtualCard cvv="1212" expiryDate="testDate" className="testClass" />
    );
    expect(wrapper.find('[data-testid="cvv"]').text()).toEqual('1212');
  });
});
