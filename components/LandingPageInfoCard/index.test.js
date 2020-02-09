import React from 'react';
import { shallow } from 'enzyme';

import LandingPageInfoCard from './index';

it('renders without crashing', () => {
  shallow(<LandingPageInfoCard />);
});
