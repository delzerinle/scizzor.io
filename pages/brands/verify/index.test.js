import React from 'react';
import { shallow } from 'enzyme';

import BrandsVerify from './index';
import { SEO, Auth } from '@components';

describe('BrandsVerify page tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsVerify />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<BrandsVerify />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<BrandsVerify />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
