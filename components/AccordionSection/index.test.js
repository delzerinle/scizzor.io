import React from 'react';
import { shallow } from 'enzyme';

import AccordionSection from './index';

it('renders without crashing', () => {
  shallow(
    <AccordionSection isOpen={false} label="test" onClick={jest.fn()}>
      <p>test</p>
    </AccordionSection>
  );
});
