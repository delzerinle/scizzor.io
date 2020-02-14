import React from 'react';
import { shallow } from 'enzyme';

import BrandsTitleBanner from './index';

describe('BrandsTitleBanner tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsTitleBanner title="test" description="test description" />);
  });

  it('renders right title', () => {
    const wrapper = shallow(
      <BrandsTitleBanner title="test" description="test description" />
    );
    expect(wrapper.find('h4').text()).toEqual('test');
  });

  it('does not render title if title prop is false', () => {
    const wrapper = shallow(
      <BrandsTitleBanner description="test description" />
    );
    expect(wrapper.find('h4').exists()).toBeFalsy();
  });

  it('renders right description text', () => {
    const wrapper = shallow(
      <BrandsTitleBanner description="test description" />
    );
    expect(wrapper.find('p').text()).toEqual('test description');
  });

  it('renders right button text', () => {
    const wrapper = shallow(
      <BrandsTitleBanner description="test description" btnText="test btn" />
    );
    expect(wrapper.find('button').text()).toEqual('test btn');
  });

  it('renders with className prop', () => {
    const wrapper = shallow(
      <BrandsTitleBanner description="test description" className="testClass" />
    );
    expect(wrapper.hasClass('testClass')).toBe(true);
  });
});
