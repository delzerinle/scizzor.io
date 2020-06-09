import React from 'react';
import { shallow } from 'enzyme';

import LandingPageBrandSignupBanner from './index';

it('renders without crashing', () => {
  shallow(<LandingPageBrandSignupBanner />);
});
