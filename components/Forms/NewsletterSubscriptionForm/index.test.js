import React from 'react';
import { shallow } from 'enzyme';

import NewsletterSubscriptionForm from './index';

describe('NewsletterSubscriptionForm tests', () => {
  it('renders without crashing', () => {
    shallow(<NewsletterSubscriptionForm />);
  });
});
