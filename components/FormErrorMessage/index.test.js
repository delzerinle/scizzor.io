import React from 'react';
import { shallow } from 'enzyme';

import FormErrorMessage from './index';

it('renders without crashing', () => {
  shallow(<FormErrorMessage>Error message</FormErrorMessage>);
});
