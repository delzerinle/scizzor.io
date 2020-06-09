import React from 'react';
import { shallow } from 'enzyme';

import BrandDashboardCounter from './index';

describe('BrandDashboardCounter tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandDashboardCounter title="test" count={1} />);
  });

  it('renders title', () => {
    const wrapper = shallow(<BrandDashboardCounter title="test" count={1} />);
    expect(wrapper.find('[data-testid="title"]').text()).toEqual('test');
  });

  it('renders count', () => {
    const wrapper = shallow(<BrandDashboardCounter title="test" count={10} />);
    expect(wrapper.find('[data-testid="count"]').text()).toEqual('10');
  });

  it('renders className prop', () => {
    const wrapper = shallow(
      <BrandDashboardCounter className="testClass" title="test" count={1} />
    );
    expect(wrapper.hasClass('testClass')).toBe(true);
  });
});
