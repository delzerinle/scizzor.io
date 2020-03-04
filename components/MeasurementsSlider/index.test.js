import React from 'react';
import { shallow } from 'enzyme';

import MeasurementsSlider from './index';

describe('MeasurementsSlider tests', () => {
  it('renders without crashing', () => {
    shallow(
      <MeasurementsSlider>
        <p>Test</p>
      </MeasurementsSlider>
    );
  });
});
