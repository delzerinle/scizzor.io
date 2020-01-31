import React from 'react';
import { shallow } from 'enzyme';

import Apparel from './index';

it('renders without crashing', () => {
  shallow(<Apparel />);
});
