import React from 'react';
import { shallow } from 'enzyme';

import BrandsSignIn from './index';
import { SEO, Auth } from '@components';

describe('BrandsSignIn page tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsSignIn />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<BrandsSignIn />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<BrandsSignIn />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
