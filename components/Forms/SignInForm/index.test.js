import React from 'react';
import { shallow } from 'enzyme';

import SignInForm from './index';

it('renders without crashing', () => {
  shallow(<SignInForm onSubmit={jest.fn()} />);
});
