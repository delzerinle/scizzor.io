import React from 'react';
import { shallow } from 'enzyme';
import { formatNumber } from '@helpers';

import ApparelCard from './index';

describe('ApparelCard tests', () => {
  it('renders without crashing', () => {
    shallow(
      <ApparelCard
        price={10}
        name="test name"
        title="test title"
        imageSrc="testSrc.jpg"
        btnTitle="test BtnTitle"
      />
    );
  });

  it('renders right image src', () => {
    const wrapper = shallow(
      <ApparelCard
        price={10}
        name="test name"
        title="test title"
        imageSrc="testSrc.jpg"
        btnTitle="test BtnTitle"
      />
    );

    expect(wrapper.find('img').prop('src')).toEqual('testSrc.jpg');
  });

  it('renders button title', () => {
    const wrapper = shallow(
      <ApparelCard
        price={10}
        name="test name"
        title="test title"
        imageSrc="testSrc.jpg"
        btnTitle="test BtnTitle"
      />
    );

    expect(wrapper.find('button').text()).toEqual('test BtnTitle');
  });

  it('renders title', () => {
    const wrapper = shallow(
      <ApparelCard
        price={10}
        name="test name"
        title="test title"
        imageSrc="testSrc.jpg"
        btnTitle="test BtnTitle"
      />
    );

    expect(wrapper.find('[data-testid="title"]').text()).toEqual('test title');
  });

  it('renders price', () => {
    const wrapper = shallow(
      <ApparelCard
        price={10}
        name="test name"
        title="test title"
        imageSrc="testSrc.jpg"
        btnTitle="test BtnTitle"
      />
    );

    expect(wrapper.find('[data-testid="price"]').text()).toEqual(
      `Starting at £${formatNumber(10)}`
    );
  });

  it('renders name', () => {
    const wrapper = shallow(
      <ApparelCard
        price={10}
        name="test name"
        title="test title"
        imageSrc="testSrc.jpg"
        btnTitle="test BtnTitle"
      />
    );

    expect(wrapper.find('[data-testid="name"]').text()).toEqual('test name');
  });
});
