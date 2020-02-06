import React from 'react';
import { shallow } from 'enzyme';

import MobileFooter from './index';

it('renders without crashing', () => {
  shallow(<MobileFooter />);
});
