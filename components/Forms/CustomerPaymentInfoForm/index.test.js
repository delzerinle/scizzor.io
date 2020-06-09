import React from 'react';
import { shallow } from 'enzyme';

import CustomerPaymentInfoForm from './index';

describe('CustomerPaymentInfoForm tests', () => {
  it('renders without crashing', () => {
    shallow(<CustomerPaymentInfoForm onSubmit={() => jest.fn()} />);
  });
});
