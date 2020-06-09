import React from 'react';
import { shallow } from 'enzyme';

import PairWithSlider from './index';

describe('PairWithSlider tests', () => {
  it('renders without crashing', () => {
    shallow(
      <PairWithSlider>
        <div>test</div>
      </PairWithSlider>
    );
  });
});
