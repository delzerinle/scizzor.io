import React from 'react';
import { shallow } from 'enzyme';

import ApparelCard from './index';

describe('ApparelCard tests', () => {
  it('renders without crashing', () => {
    shallow(<ApparelCard imageSrc="testSrc.jpg" />);
  });

  it('renders right image src', () => {
    const imageSrc = 'testSrc.jpg';
    const wrapper = shallow(<ApparelCard imageSrc={imageSrc} />);

    expect(wrapper.find('img').prop('src')).toEqual(imageSrc);
  });
});
