import React from 'react';
import { shallow } from 'enzyme';

import MobileMenuDrawer from './index';

describe('Mobile menu drawer tests', () => {
  it('renders without crashing', () => {
    shallow(<MobileMenuDrawer isOpen={true} closeDrawer={() => jest.func()} />);
  });

  it('shows component if isOpen prop is true', () => {
    const wrapper = shallow(
      <MobileMenuDrawer isOpen={true} closeDrawer={() => jest.func()} />
    );
    expect(
      wrapper.find('[data-test-id="MobileMenuDrawer"]').hasClass('fixed')
    ).toBe(true);
    expect(
      wrapper.find('[data-test-id="MobileMenuDrawer"]').hasClass('hidden')
    ).toBe(false);
  });

  it('hides component if isOpen prop is false', () => {
    const wrapper = shallow(
      <MobileMenuDrawer isOpen={false} closeDrawer={() => jest.func()} />
    );
    expect(
      wrapper.find('[data-test-id="MobileMenuDrawer"]').hasClass('hidden')
    ).toBe(true);
    expect(
      wrapper.find('[data-test-id="MobileMenuDrawer"]').hasClass('fixed')
    ).toBe(false);
  });
});
