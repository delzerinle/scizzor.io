import React from 'react';
import { shallow } from 'enzyme';

import CheckboxField from './index';

describe('Checkbox field tests', () => {
  it('renders without crashing', () => {
    shallow(
      <CheckboxField name="test" label="test" value="test" className="test" />
    );
  });

  it('checkbox field snapshot', () => {
    const wrapper = shallow(
      <CheckboxField name="test" label="test" value="test" className="test" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
