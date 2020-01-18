import React from 'react';
import { shallow } from 'enzyme';

import BrandSignUpForm from './index';

it('renders without crashing', () => {
  shallow(<BrandSignUpForm />);
});
