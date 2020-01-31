import React from 'react';
import { shallow } from 'enzyme';

import CheckboxField from './index';

it('renders without crashing', () => {
  shallow(
    <CheckboxField
      name="test"
      label="test"
      value="test"
      className="test"
      errors={{ test: 'test' }}
      touched={{ test: 'test' }}
    />
  );
});
