import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';
import { SEO, Auth } from '../components';

describe('Home page tests', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders Auth component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Auth)).toHaveLength(1);
  });
});
