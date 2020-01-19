import React from 'react';
import { shallow, mount } from 'enzyme';

import InputField from './index';

describe('Input field tests', () => {
  it('renders without crashing', () => {
    shallow(
      <InputField
        name="test"
        label="test"
        errors={{ test: 'test' }}
        touched={{ test: 'test' }}
      />
    );
  });

  it('input field snapshot', () => {
    const wrapper = shallow(
      <InputField
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
      <InputField
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
