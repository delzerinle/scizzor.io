import React from 'react';
import { shallow } from 'enzyme';

import Tab from './index';

describe('Tab tests', () => {
  it('renders without crashing', () => {
    shallow(<Tab label="test" onClick={() => jest.func()} activeTab="Test" />);
  });
});
