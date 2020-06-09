import React from 'react';
import { shallow } from 'enzyme';

import CustomerUpdatePersonalInfoForm from './index';

describe('CustomerUpdatePersonalInfoForm tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomerUpdatePersonalInfoForm onSubmit={jest.fn()} />);
  });
});
