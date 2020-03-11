import React from 'react';
import { shallow } from 'enzyme';

import CustomerDash from './index';
import { SEO, CustomersLayout } from '@components';

describe('CustomerDash page tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomerDash />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<CustomerDash />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders CustomersLayout component', () => {
    const wrapper = shallow(<CustomerDash />);
    expect(wrapper.find(CustomersLayout)).toHaveLength(1);
  });
});
