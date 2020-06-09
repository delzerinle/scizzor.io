import React from 'react';
import { shallow } from 'enzyme';

import MeasurementsForm from './index';

describe('MeasurementsForm tests', () => {
  it('renders without crashing', () => {
    shallow(<MeasurementsForm />);
  });
});
