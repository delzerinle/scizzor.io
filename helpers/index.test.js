import { formatNumber } from './index';

describe('helpers tests', () => {
  it('formats numbers', () => {
    expect(formatNumber(2999.99)).toBe('2,999.99');
  });
});
