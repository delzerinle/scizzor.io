import React from 'react';
import { shallow } from 'enzyme';

import AddOutfits from './index';
import { SEO, BrandsLayout } from '@components';

describe('AddOutfits tests', () => {
  it('renders without crashing', () => {
    shallow(<AddOutfits />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<AddOutfits />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders BrandsLayout component', () => {
    const wrapper = shallow(<AddOutfits />);
    expect(wrapper.find(BrandsLayout)).toHaveLength(1);
  });
});
