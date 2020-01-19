import React from 'react';
import { shallow } from 'enzyme';

import BrandsRegister from './index';
import { SEO, Auth } from '@components';

describe('BrandsRegister page tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsRegister />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<BrandsRegister />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<BrandsRegister />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
