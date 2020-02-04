import React from 'react';
import { shallow } from 'enzyme';

import LandingPageBanner from './index';

it('renders without crashing', () => {
  shallow(<LandingPageBanner />);
});
