import React from 'react';
import { shallow } from 'enzyme';

import AppointmentApparelCard from './index';

describe('AppointmentApparelCard tests', () => {
  it('renders without crashing', () => {
    shallow(
      <AppointmentApparelCard
        brand="Test"
        apparelName="Test"
        name="Test"
        imageSrc="test.jpg"
      />
    );
  });

  it('renders image', () => {
    const wrapper = shallow(
      <AppointmentApparelCard
        brand="Test"
        apparelName="Test"
        name="Test"
        imageSrc="test.jpg"
      />
    );
    expect(wrapper.find('img').prop('src')).toEqual('test.jpg');
  });

  it('renders className prop', () => {
    const wrapper = shallow(
      <AppointmentApparelCard
        brand="Test"
        apparelName="Test"
        name="Test"
        imageSrc="test.jpg"
        className="testClass"
      />
    );
    expect(wrapper.hasClass('testClass')).toBe(true);
  });
});
