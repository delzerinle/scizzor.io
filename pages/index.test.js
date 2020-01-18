import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from './index';
import { SEO } from '../components';

describe('Home page tests', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });

  it('renders SEO component', () => {
    const wrapper = mount(<Home />);
    expect(
      wrapper.contains(<SEO title="Title" description="description" />)
    ).toBeTruthy();
  });
});
