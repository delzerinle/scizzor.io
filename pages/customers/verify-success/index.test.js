import React from 'react';
import { shallow } from 'enzyme';

import CustomersVerifySucess from './index';
import { SEO, Auth } from '@components';

describe('CustomersVerifySucess page tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomersVerifySucess />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<CustomersVerifySucess />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<CustomersVerifySucess />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
