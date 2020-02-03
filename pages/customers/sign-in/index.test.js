import React from 'react';
import { shallow } from 'enzyme';

import CustomersSignIn from './index';
import { SEO, Auth } from '@components';

describe('CustomersSignIn page tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomersSignIn />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<CustomersSignIn />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<CustomersSignIn />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
