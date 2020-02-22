import React from 'react';
import { shallow } from 'enzyme';

import AddOutfitQuestionWrapper from './index';

describe('AddOutfitQuestionWrapper tests', () => {
  it('renders without crashing', () => {
    shallow(
      <AddOutfitQuestionWrapper title="Test" description="test">
        <p>test</p>
      </AddOutfitQuestionWrapper>
    );
  });

  it('renders title', () => {
    const wrapper = shallow(
      <AddOutfitQuestionWrapper title="Test title" description="test">
        <p>test</p>
      </AddOutfitQuestionWrapper>
    );
    expect(wrapper.find('[data-testid="title"]').text()).toEqual('Test title');
  });

  it('renders description', () => {
    const wrapper = shallow(
      <AddOutfitQuestionWrapper
        title="Test title"
        description="test description"
      >
        <p>test</p>
      </AddOutfitQuestionWrapper>
    );
    expect(wrapper.find('[data-testid="description"]').text()).toEqual(
      'test description'
    );
  });
});
