import React from 'react';
import { shallow, mount } from 'enzyme';

import CustomersLayout from './index';

describe('Customers Layout test', () => {
  it('renders without crashing', () => {
    shallow(<CustomersLayout />);
  });

  it('shows mobile menu on drawer open', () => {
    const wrapper = mount(<CustomersLayout />);
    const toggle = wrapper.find('[data-testid="menuToggle"]');

    toggle.simulate('click');

    expect(
      wrapper.find('[data-testid="MobileMenuDrawer"]').hasClass('fixed')
    ).toBe(true);
  });
});
