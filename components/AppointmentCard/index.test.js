import React from 'react';
import { shallow } from 'enzyme';

import AppointmentCard from './index';

describe('AppointmentCard tests', () => {
  it('renders without crashing', () => {
    shallow(
      <AppointmentCard
        dayCount={1}
        date="testDate"
        time="testTime"
        address="testAddress"
      />
    );
  });

  it('renders with className', () => {
    const wrapper = shallow(
      <AppointmentCard
        dayCount={1}
        date="testDate"
        time="testTime"
        address="testAddress"
        className="testClass"
      />
    );
    expect(wrapper.hasClass('testClass')).toBeTruthy();
  });

  it('shows address', () => {
    const wrapper = shallow(
      <AppointmentCard
        dayCount={1}
        date="testDate"
        time="testTime"
        address="testAddress"
      />
    );
    expect(wrapper.find('[data-testid="address"]').text()).toEqual(
      'testAddress'
    );
  });

  it('shows date', () => {
    const wrapper = shallow(
      <AppointmentCard
        dayCount={1}
        date="testDate"
        time="testTime"
        address="testAddress"
      />
    );
    expect(wrapper.find('[data-testid="date"]').text()).toEqual('testDate');
  });

  it('shows time', () => {
    const wrapper = shallow(
      <AppointmentCard
        dayCount={1}
        date="testDate"
        time="testTime"
        address="testAddress"
      />
    );
    expect(wrapper.find('[data-testid="time"]').text()).toEqual('testTime');
  });

  it('shows dayCount', () => {
    const wrapper = shallow(
      <AppointmentCard
        dayCount={100}
        date="testDate"
        time="testTime"
        address="testAddress"
      />
    );
    expect(wrapper.find('[data-testid="dayCount"]').text()).toEqual(
      'In 100 days'
    );
  });
});
