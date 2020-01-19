import React from 'react';
import { shallow } from 'enzyme';

import BrandSignInForm from './index';

it('renders without crashing', () => {
  shallow(<BrandSignInForm />);
});
