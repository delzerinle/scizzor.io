import React from 'react';
import { shallow } from 'enzyme';
import { formatNumber } from '@helpers';

import PairWithItem from './index';

describe('PairWithItem tests', () => {
  it('renders without crashing', () => {
    shallow(
      <PairWithItem
        price={10}
        name="test"
        image="testImage.jpg"
        description="test description"
      />
    );
  });

  it('renders image', () => {
    const wrapper = shallow(
      <PairWithItem
        price={10}
        name="test"
        image="testImage.jpg"
        description="test description"
      />
    );
    expect(wrapper.find('img').prop('src')).toEqual('testImage.jpg');
  });

  it('renders name', () => {
    const wrapper = shallow(
      <PairWithItem
        price={10}
        name="test"
        image="testImage.jpg"
        description="test description"
      />
    );
    expect(wrapper.find('[data-testid="name"]').text()).toEqual('test');
  });

  it('renders description', () => {
    const wrapper = shallow(
      <PairWithItem
        price={10}
        name="test"
        image="testImage.jpg"
        description="test description"
      />
    );
    expect(wrapper.find('[data-testid="description"]').text()).toEqual(
      'test description'
    );
  });

  it('renders price', () => {
    const wrapper = shallow(
      <PairWithItem
        price={10}
        name="test"
        image="testImage.jpg"
        description="test description"
      />
    );
    expect(wrapper.find('[data-testid="price"]').text()).toEqual(
      `£${formatNumber(10)}`
    );
  });
});
