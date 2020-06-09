import React from 'react';
import { shallow } from 'enzyme';

import CustomerTabs from './index';

describe('CustomerTabs tests', () => {
  it('renders without crashing', () => {
    shallow(
      <CustomerTabs>
        <div label="test">test</div>
        <div label="test">test</div>
      </CustomerTabs>
    );
  });
});
