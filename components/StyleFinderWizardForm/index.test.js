import React from 'react';
import { shallow } from 'enzyme';

import StyleFinderWizardForm from './index';

describe('StyleFinderWizardForm tests', () => {
  it('renders without crashing', () => {
    shallow(
      <StyleFinderWizardForm
        initialValues={{}}
        currentSlideIndex={1}
        validationSchema={{}}
        onSubmit={() => jest.func()}
        onSubmitBtnClick={() => jest.func()}
        setCurrentSlideIndex={() => jest.func()}
      >
        <div>test</div>
      </StyleFinderWizardForm>
    );
  });
});
