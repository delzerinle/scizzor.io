import React from 'react';
import { shallow } from 'enzyme';

import BrandsVerifyExpired from './index';
import { SEO, Auth } from '@components';

describe('BrandsVerifyExpired page tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsVerifyExpired />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<BrandsVerifyExpired />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<BrandsVerifyExpired />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
