import React from 'react';
import { shallow } from 'enzyme';

import SelectField from './index';

describe('SelectField tests', () => {
  it('renders without crashing', () => {
    shallow(<SelectField />);
  });

  it('renders className', () => {
    const wrapper = shallow(<SelectField className="testClass" />);
    expect(wrapper.hasClass('testClass')).toBeTruthy();
  });
});
