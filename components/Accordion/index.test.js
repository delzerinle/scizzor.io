import React from 'react';
import { shallow } from 'enzyme';

import Accordion from './index';

it('renders without crashing', () => {
  shallow(
    <Accordion>
      <p label="test">test</p>
    </Accordion>
  );
});
