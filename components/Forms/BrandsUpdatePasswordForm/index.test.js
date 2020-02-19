import React from 'react';
import { shallow } from 'enzyme';

import BrandsUpdatePasswordForm from './index';

describe('BrandsUpdatePasswordForm tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsUpdatePasswordForm onSubmit={jest.fn()} />);
  });
});
