import React from 'react';
import { shallow } from 'enzyme';

import LandingPageFavBrandsBanner from './index';

it('renders without crashing', () => {
  shallow(<LandingPageFavBrandsBanner />);
});
