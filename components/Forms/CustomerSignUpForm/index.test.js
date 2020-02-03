import React from 'react';
import { shallow } from 'enzyme';

import CustomerSignUpForm from './index';

it('renders without crashing', () => {
  shallow(<CustomerSignUpForm onSubmit={jest.fn()} />);
});
