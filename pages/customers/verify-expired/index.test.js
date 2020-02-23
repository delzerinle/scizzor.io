import React from 'react';
import { shallow } from 'enzyme';

import CustomersVerifyExpired from './index';
import { SEO, Auth } from '@components';

describe('CustomersVerifyExpired page tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomersVerifyExpired />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<CustomersVerifyExpired />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<CustomersVerifyExpired />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
