import React from 'react';
import { shallow } from 'enzyme';

import Outfits from './index';
import { SEO, BrandsLayout } from '@components';

describe('Outfits page tests', () => {
  it('renders without crashing', () => {
    shallow(<Outfits />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<Outfits />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders BrandsLayout component', () => {
    const wrapper = shallow(<Outfits />);
    expect(wrapper.find(BrandsLayout)).toHaveLength(1);
  });
});
