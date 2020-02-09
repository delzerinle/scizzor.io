import React from 'react';
import { shallow } from 'enzyme';

import LandingPageCustomerCTA from './index';

it('renders without crashing', () => {
  shallow(<LandingPageCustomerCTA />);
});
