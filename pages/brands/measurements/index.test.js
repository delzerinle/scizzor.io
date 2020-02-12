import React from 'react';
import { shallow } from 'enzyme';

import Measurements from './index';
import { SEO, BrandsLayout } from '@components';

describe('Measurements tests', () => {
  it('renders without crashing', () => {
    shallow(<Measurements />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<Measurements />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders BrandsLayout component', () => {
    const wrapper = shallow(<Measurements />);
    expect(wrapper.find(BrandsLayout)).toHaveLength(1);
  });
});
