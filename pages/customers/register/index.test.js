import React from 'react';
import { shallow } from 'enzyme';

import CustomersRegister from './index';
import { SEO, Auth } from '@components';

describe('CustomersRegister page tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomersRegister />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<CustomersRegister />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<CustomersRegister />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
