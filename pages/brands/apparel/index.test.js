import React from 'react';
import { shallow } from 'enzyme';

import Apparel from './index';
import { SEO, BrandsLayout } from '@components';

describe('Apparel page tests', () => {
  it('renders without crashing', () => {
    shallow(<Apparel />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<Apparel />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders BrandsLayout component', () => {
    const wrapper = shallow(<Apparel />);
    expect(wrapper.find(BrandsLayout)).toHaveLength(1);
  });
});
