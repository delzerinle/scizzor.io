import React from 'react';
import { shallow } from 'enzyme';

import BrandsVerifyInvalid from './index';
import { SEO, Auth } from '@components';

describe('BrandsVerifyInvalid page tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsVerifyInvalid />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<BrandsVerifyInvalid />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<BrandsVerifyInvalid />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
