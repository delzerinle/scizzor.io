import React from 'react';
import { shallow } from 'enzyme';

import BrandsUpdateProfileForm from './index';

describe('BrandsUpdateProfileForm tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsUpdateProfileForm onSubmit={jest.fn()} />);
  });
});
