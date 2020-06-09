import React from 'react';
import { shallow } from 'enzyme';

import Tabs from './index';

describe('Tabs tests', () => {
  it('renders without crashing', () => {
    shallow(
      <Tabs>
        <div label="test">test</div>
        <div label="test">test</div>
      </Tabs>
    );
  });
});
