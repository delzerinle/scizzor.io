import React from 'react';
import { shallow } from 'enzyme';

import BackToPage from './index';

describe('BackToPage tests', () => {
  it('renders without crashing', () => {
    shallow(<BackToPage link="/test" title="test" />);
  });

  it('renders title', () => {
    const wrapper = shallow(<BackToPage link="/test" title="test" />);
    expect(wrapper.find('p').text()).toEqual('test');
  });

  it('renders classname', () => {
    const wrapper = shallow(
      <BackToPage link="/test" title="test" className="testClass" />
    );
    expect(wrapper.find('a').hasClass('testClass')).toBe(true);
  });
});
