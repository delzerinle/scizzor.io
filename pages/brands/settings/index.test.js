import React from 'react';
import { shallow } from 'enzyme';

import BrandsSettings from './index';
import { SEO, BrandsLayout } from '@components';

describe('BrandSettings tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsSettings />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<BrandsSettings />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders BrandsLayout component', () => {
    const wrapper = shallow(<BrandsSettings />);
    expect(wrapper.find(BrandsLayout)).toHaveLength(1);
  });
});
