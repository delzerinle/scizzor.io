import React from 'react';
import { shallow } from 'enzyme';

import Auth from './index';

it('renders without crashing', () => {
  shallow(<Auth>test</Auth>);
});
