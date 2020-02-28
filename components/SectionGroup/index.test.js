import React from 'react';
import { shallow } from 'enzyme';

import SectionGroup from './index';

describe('SectionGroup tests', () => {
  it('renders without crashing', () => {
    shallow(
      <SectionGroup title="test">
        <p>Test</p>
      </SectionGroup>
    );
  });

  it('renders title', () => {
    const wrapper = shallow(
      <SectionGroup title="test title">
        <p>Test</p>
      </SectionGroup>
    );

    expect(wrapper.find('[data-testid="title"]').text()).toEqual('test title');
  });
});
