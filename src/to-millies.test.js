import toMillies from './to-millies';

describe('toMillies(value)', () => {
  it('returns a number', () => {
    expect(typeof toMillies('1s')).toBe('number');
  });

  it('returns the value in milliseconds', () => {
    expect(toMillies('1s')).toBe(1000);
  });

  it('parses values with decimals', () => {
    expect(toMillies('0.5s')).toBe(500);
  });

  it('parses values with decimals even if they do not start with 0', () => {
    expect(toMillies('.1s')).toBe(100);
  });

  it('parses negative values', () => {
    expect(toMillies('-5s')).toBe(-5000);
  });
});
