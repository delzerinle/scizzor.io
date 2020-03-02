import React from 'react';
import { shallow } from 'enzyme';

import StyleFinder from './index';
import { SEO, CustomersLayout } from '@components';

describe('StyleFinder tests', () => {
  it('renders without crashing', () => {
    shallow(<StyleFinder />);
  });

  it('renders SEO component', () => {
    const wrapper = shallow(<StyleFinder />);
    expect(wrapper.find(SEO)).toHaveLength(1);
  });

  it('renders CustomersLayout component', () => {
    const wrapper = shallow(<StyleFinder />);
    expect(wrapper.find(CustomersLayout)).toHaveLength(1);
  });
});
