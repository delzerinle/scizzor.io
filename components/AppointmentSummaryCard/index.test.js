import React from 'react';
import { shallow } from 'enzyme';

import AppointmentSummaryCard from './index';

describe('AppointmentSummaryCard tests', () => {
  it('renders without crashing', () => {
    shallow(
      <AppointmentSummaryCard date="test date" time="test time" name="test" />
    );
  });

  it('renders className prop', () => {
    const wrapper = shallow(
      <AppointmentSummaryCard
        date="test date"
        time="test time"
        name="test"
        className="testClass"
      />
    );
    expect(wrapper.hasClass('testClass')).toBe(true);
  });
});
