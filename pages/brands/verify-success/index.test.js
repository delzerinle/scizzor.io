import React from 'react';
import { shallow } from 'enzyme';

import BrandsVerifySuccess from './index';
import { SEO, Auth } from '@components';

describe('BrandsVerifySuccess page tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsVerifySuccess />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<BrandsVerifySuccess />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<BrandsVerifySuccess />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
