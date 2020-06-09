import React from 'react';
import { shallow } from 'enzyme';

import BrandsDesktopTitleBanner from './index';

describe('BrandsDesktopTitleBanner tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsDesktopTitleBanner description="test description" />);
  });

  it('renders right button text', () => {
    const wrapper = shallow(
      <BrandsDesktopTitleBanner
        description="test description"
        btnText="test btn"
      />
    );
    expect(wrapper.find('p').text()).toEqual('test description');
  });

  it('renders right button text', () => {
    const wrapper = shallow(
      <BrandsDesktopTitleBanner
        description="test description"
        btnText="test btn"
      />
    );
    expect(wrapper.find('button').text()).toEqual('test btn');
  });
});
