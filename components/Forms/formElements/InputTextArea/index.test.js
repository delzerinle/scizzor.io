import React from 'react';
import { shallow } from 'enzyme';

import InputTextArea from './index';

describe('InputTextArea tests', () => {
  it('renders without crashing', () => {
    shallow(<InputTextArea label="Test" name="test" />);
  });

  it('input field snapshot', () => {
    const wrapper = shallow(
      <InputTextArea
        name="test"
        label="test"
        errors={{ test: 'test' }}
        touched={{ test: 'test' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
