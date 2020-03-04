import React from 'react';
import { shallow } from 'enzyme';

import OrderItemCard from './index';

describe('OrderItemCard tests', () => {
  it('renders without crashing', () => {
    shallow(
      <OrderItemCard
        name="testName"
        imgSrc="test.jpg"
        orderNumber="011"
        description="test description"
      />
    );
  });

  it('renders className', () => {
    const wrapper = shallow(
      <OrderItemCard
        name="testName"
        orderNumber="011"
        imgSrc="test.jpg"
        className="testClass"
        description="test description"
      />
    );
    expect(wrapper.hasClass('testClass')).toBeTruthy();
  });

  it('renders image src', () => {
    const wrapper = shallow(
      <OrderItemCard
        name="testName"
        orderNumber="011"
        imgSrc="test.jpg"
        className="testClass"
        description="test description"
      />
    );
    expect(wrapper.find('img').prop('src')).toEqual('test.jpg');
  });

  it('renders name', () => {
    const wrapper = shallow(
      <OrderItemCard
        name="testName"
        orderNumber="011"
        imgSrc="test.jpg"
        className="testClass"
        description="test description"
      />
    );
    expect(wrapper.find('[data-testid="name"]').text()).toEqual('testName');
  });

  it('renders description', () => {
    const wrapper = shallow(
      <OrderItemCard
        name="testName"
        orderNumber="011"
        imgSrc="test.jpg"
        className="testClass"
        description="test description"
      />
    );
    expect(wrapper.find('[data-testid="description"]').text()).toEqual(
      'test description'
    );
  });
});
