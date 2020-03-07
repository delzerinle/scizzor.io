import React from 'react';
import { shallow } from 'enzyme';

import CustomerAddressBookForm from './index';

describe('CustomerAddressBookForm tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomerAddressBookForm onSubmit={() => jest.func()} />);
  });
});
