import React from 'react';
import { shallow } from 'enzyme';

import AppointmentTable from './index';

describe('AppointmentTable tests', () => {
  it('renders without crashing', () => {
    shallow(
      <AppointmentTable
        data={[]}
        columns={[{ Header: 'Test', accessor: 'test' }]}
      />
    );
  });
});
