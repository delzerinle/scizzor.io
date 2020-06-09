import React from 'react';
import { shallow } from 'enzyme';

import SEO from './index';

it('renders without crashing', () => {
  shallow(<SEO title="Title" description="Description" image="image_url" />);
});

//! add snapshot
