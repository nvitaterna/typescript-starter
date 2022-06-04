import helloWorld from './index';

describe('Hello World', () => {
  test('should say Hello World', () => {
    expect(helloWorld()).toBe('Hello World');
  });
});
