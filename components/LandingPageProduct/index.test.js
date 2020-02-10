import React from 'react';
import { shallow } from 'enzyme';

import LandingPageProduct from './index';

describe('LandingPageProduct tests', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageProduct image="test" title="test" price={10} />);
  });

  it('renders image with right src', () => {
    const imageSrc = 'testSrc.jpg';
    const wrapper = shallow(
      <LandingPageProduct image={imageSrc} title="test" price={10} />
    );
    expect(
      wrapper
        .find('img')
        .first()
        .prop('src')
    ).toEqual(imageSrc);
  });

  it('renders with right title', () => {
    const imageSrc = 'testSrc.jpg';
    const wrapper = shallow(
      <LandingPageProduct image={imageSrc} title="Paul Smith" price={40} />
    );
    expect(
      wrapper
        .find('p')
        .first()
        .text()
    ).toEqual('Paul Smith');
  });

  it('renders with the right price', () => {
    const imageSrc = 'testSrc.jpg';
    const wrapper = shallow(
      <LandingPageProduct image={imageSrc} title="Paul Smith" price={250} />
    );
    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toEqual('Starting at $250');
  });

  it('formats price above 1000', () => {
    const imageSrc = 'testSrc.jpg';
    const wrapper = shallow(
      <LandingPageProduct image={imageSrc} title="Paul Smith" price={2999.99} />
    );
    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toEqual('Starting at $2,999.99');
  });
});
