import { drawChristmasTree } from './noel';

describe('christmasTree', () => {
  it('should display trunk when size 0', () => {
    expect(drawChristmasTree(0)).toBe('X');
  });

  it('should display tree with one branch when size 1', () => {
    expect(drawChristmasTree(1)).toBe('X\nX');
  });

  // it('should display tree with one branch when size 2', () => {
  //   expect(drawChristmasTree(2)).toBe(' X \nXXX\n X ');
  // });

  it('should display centered trunk', () => {
    expect(drawChristmasTree(5)).toContain('    X');
    expect(drawChristmasTree(6)).toContain('     X');
  });
});
