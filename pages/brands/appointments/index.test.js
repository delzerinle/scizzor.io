import React from 'react';
import { shallow } from 'enzyme';

import Appointments from './index';
import { SEO, BrandsLayout } from '@components';

describe('Appointments tests', () => {
  it('renders without crashing', () => {
    shallow(<Appointments />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<Appointments />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders BrandsLayout component', () => {
    const wrapper = shallow(<Appointments />);
    expect(wrapper.find(BrandsLayout)).toHaveLength(1);
  });
});
