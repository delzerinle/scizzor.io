import React from 'react';
import { shallow } from 'enzyme';

import CustomerSettings from './index';
import { SEO, CustomersLayout } from '@components';

describe('CustomerSettings tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomerSettings />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<CustomerSettings />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders CustomersLayout component', () => {
    const wrapper = shallow(<CustomerSettings />);
    expect(wrapper.find(CustomersLayout)).toHaveLength(1);
  });
});
