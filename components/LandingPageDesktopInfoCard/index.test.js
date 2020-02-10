import React from 'react';
import { shallow } from 'enzyme';

import LandingPageDesktopInfoCard from './index';

describe('LandingPageDesktopInfoCard tests', () => {
  it('renders without crashing', () => {
    shallow(
      <LandingPageDesktopInfoCard>
        <div>test</div>
      </LandingPageDesktopInfoCard>
    );
  });
});
