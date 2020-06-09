import React from 'react';
import { shallow } from 'enzyme';

import CustomersTitleBanner from './index';

describe('CustomersTitleBanner tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomersTitleBanner title="test" />);
  });

  it('renders right title', () => {
    const wrapper = shallow(<CustomersTitleBanner title="test" />);
    expect(wrapper.find('h4').text()).toEqual('test');
  });
});
