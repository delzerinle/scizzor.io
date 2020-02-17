import React from 'react';
import { shallow } from 'enzyme';

import LandingPageCustomerCTA from './index';

describe('LandingPageCustomerCTA tests', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageCustomerCTA />);
  });

  it('adds className prop', () => {
    const wrapper = shallow(<LandingPageCustomerCTA className="test" />);
    expect(wrapper.hasClass('test')).toBe(true);
  });
});
