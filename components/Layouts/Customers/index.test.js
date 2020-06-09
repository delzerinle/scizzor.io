import React from 'react';
import { shallow, mount } from 'enzyme';

import CustomersLayout from './index';
import { MobileFooter, Footer } from '@components';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
      push: () => null,
    };
  },
}));

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

  it('showFooter prop hides footer', () => {
    const wrapper = mount(
      <CustomersLayout showFooter={false}>test</CustomersLayout>
    );

    expect(wrapper.find(Footer)).toHaveLength(0);
  });

  it('showFooter prop hides mobile footer', () => {
    const wrapper = mount(
      <CustomersLayout showFooter={false}>test</CustomersLayout>
    );

    expect(wrapper.find(MobileFooter)).toHaveLength(0);
  });
});
