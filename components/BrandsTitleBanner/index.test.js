import React from 'react';
import { sallow, shallow } from 'enzyme';

import BrandsTitleBanner from './index';

describe('BrandsTitleBanner tests', () => {
  it('renders without crashing', () => {
    shallow(<BrandsTitleBanner />);
  });
});
