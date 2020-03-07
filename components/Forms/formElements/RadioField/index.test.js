import React from 'react';
import { shallow } from 'enzyme';

import RadioField from './index';

describe('RadioField tests', () => {
  it('renders without crashing', () => {
    shallow(<RadioField name="test" label="test" className="test" />);
  });

  it('radio snapshot', () => {
    const wrapper = shallow(
      <RadioField name="test" label="test" className="test" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
