import React from 'react';
import { shallow } from 'enzyme';

import BrandsLayout from './index';

it('renders without crashing', () => {
  shallow(<BrandsLayout />);
});
