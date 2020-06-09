import React from 'react';
import { shallow } from 'enzyme';

import ImageSelect from './index';

describe('ImageSelect tests', () => {
  it('renders without crashing', () => {
    shallow(<ImageSelect title="test title" imgSrc="test.jpg" />);
  });

  it('renders className', () => {
    const wrapper = shallow(
      <ImageSelect
        className="test-class"
        title="test title"
        imgSrc="test.jpg"
      />
    );
    expect(wrapper.hasClass('test-class')).toBe(true);
  });

  it('renders title', () => {
    const wrapper = shallow(
      <ImageSelect title="test title" imgSrc="test.jpg" />
    );
    expect(wrapper.find('p').text()).toEqual('test title');
  });

  it('renders image src', () => {
    const wrapper = shallow(
      <ImageSelect title="test title" imgSrc="test.jpg" />
    );
    expect(wrapper.find('img').prop('src')).toEqual('test.jpg');
  });
});
