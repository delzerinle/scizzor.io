import React from 'react';
import { shallow } from 'enzyme';

import InputFieldWithoutLabel from './index';

describe('InputFieldWithoutLabel tests', () => {
  it('renders without crashing', () => {
    shallow(
      <InputFieldWithoutLabel
        name="test"
        label="test"
        errors={{ test: 'test' }}
        touched={{ test: 'test' }}
      />
    );
  });

  it('input field snapshot', () => {
    const wrapper = shallow(
      <InputFieldWithoutLabel
        name="test"
        label="test"
        errors={{ test: 'test' }}
        touched={{ test: 'test' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('input field with icon snapshot', () => {
    const wrapper = shallow(
      <InputFieldWithoutLabel
        name="test"
        label="test"
        icon="test"
        errors={{ test: 'test' }}
        touched={{ test: 'test' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
