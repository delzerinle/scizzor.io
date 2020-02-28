import React from 'react';
import { shallow } from 'enzyme';

import ImageDragNDrop from './index';

describe('ImageDragNDrop tests', () => {
  it('renders without crashing', () => {
    shallow(<ImageDragNDrop />);
  });
});
