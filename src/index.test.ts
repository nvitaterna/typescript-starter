jest.spyOn(global.console, 'log').mockImplementation();

describe('Index', () => {
  beforeAll(async () => {
    import('./index');
  });
  test('should have called console.log with Hello World', () => {
    expect(global.console.log).toHaveBeenCalledWith('Hello World');
  });
});
