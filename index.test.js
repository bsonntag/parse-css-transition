const parseCssTransition = require('.');

describe('parseCssTransition(transition)', () => {
  it('parses a single transition with only the required properties', () => {
    const result = parseCssTransition('foo 1ms');

    expect(result).toEqual([{
      duration: 1,
      name: 'foo',
    }]);
  });

  it('parses a single transition with the duration in seconds', () => {
    const result = parseCssTransition('foo 1s');

    expect(result).toEqual([{
      duration: 1000,
      name: 'foo',
    }]);
  });

  it('parses a single transition with the required properties and a timing function', () => {
    const result = parseCssTransition('foo 0.5s bar');

    expect(result).toEqual([{
      duration: 500,
      name: 'foo',
      timingFunction: 'bar',
    }]);
  });

  it('parses a single transition with the required properties and a delay', () => {
    const result = parseCssTransition('foo 1s 2s');

    expect(result).toEqual([{
      delay: 2000,
      duration: 1000,
      name: 'foo',
    }]);
  });

  it('parses a single transition with all the properties', () => {
    const result = parseCssTransition('foo 50ms bar 3s');

    expect(result).toEqual([{
      delay: 3000,
      duration: 50,
      name: 'foo',
      timingFunction: 'bar',
    }]);
  });

  it('parses a transitions with arbitrary spacing', () => {
    const result = parseCssTransition('foo  50ms\tbar\n3s');

    expect(result).toEqual([{
      delay: 3000,
      duration: 50,
      name: 'foo',
      timingFunction: 'bar',
    }]);
  });

  it('parses multiple transitions', () => {
    const result = parseCssTransition('foo 1s, bar 2s');

    expect(result).toEqual([{
      duration: 1000,
      name: 'foo',
    }, {
      duration: 2000,
      name: 'bar',
    }]);
  });
});
