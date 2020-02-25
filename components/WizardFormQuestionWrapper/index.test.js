import React from 'react';
import { shallow } from 'enzyme';

import WizardFormQuestionWrapper from './index';

describe('WizardFormQuestionWrapper tests', () => {
  it('renders without crashing', () => {
    shallow(
      <WizardFormQuestionWrapper title="Test" description="test">
        <p>test</p>
      </WizardFormQuestionWrapper>
    );
  });

  it('renders title', () => {
    const wrapper = shallow(
      <WizardFormQuestionWrapper title="Test title" description="test">
        <p>test</p>
      </WizardFormQuestionWrapper>
    );
    expect(wrapper.find('[data-testid="title"]').text()).toEqual('Test title');
  });

  it('renders description', () => {
    const wrapper = shallow(
      <WizardFormQuestionWrapper
        title="Test title"
        description="test description"
      >
        <p>test</p>
      </WizardFormQuestionWrapper>
    );
    expect(wrapper.find('[data-testid="description"]').text()).toEqual(
      'test description'
    );
  });
});
