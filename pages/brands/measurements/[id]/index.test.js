import React from 'react';
import { shallow } from 'enzyme';

import SingleMeasurement from './index';
import { SEO, BrandsLayout } from '@components';

describe('SingleMeasurement tests', () => {
  it('renders without crashing', () => {
    shallow(<SingleMeasurement />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<SingleMeasurement />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders BrandsLayout component', () => {
    const wrapper = shallow(<SingleMeasurement />);
    expect(wrapper.find(BrandsLayout)).toHaveLength(1);
  });
});
