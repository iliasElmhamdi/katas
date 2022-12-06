import { drawChristmasTree } from './noel';

describe('christmasTree', () => {
  it('should display trunk when size 0', () => {
    console.log(drawChristmasTree(0));
    expect(drawChristmasTree(0)).toBe('X');
  });

  it('should display tree with one branch when size 1', () => {
    console.log(drawChristmasTree(1));
    expect(drawChristmasTree(1)).toBe('X\nX');
  });

  it('should display tree with one branch when size 2', () => {
    console.log(drawChristmasTree(2));
    expect(drawChristmasTree(2)).toBe(' X \nXXX\n X ');
  });

  it('should display tree with one branch when size 3', () => {
    console.log(drawChristmasTree(3));
    expect(drawChristmasTree(3)).toBe('  X  \n XXX \nXXXXX\n  X  ');
  });

  it('should display tree with one branch when size 4', () => {
    console.log(drawChristmasTree(4));
    expect(drawChristmasTree(4)).toBe(
      '   X   \n  XXX  \n XXXXX \nXXXXXXX\n   X   '
    );
  });

  it('should display tree with one branch when size 5', () => {
    console.log(drawChristmasTree(5));
    expect(drawChristmasTree(5)).toBe(
      '    X    \n   XXX   \n  XXXXX  \n XXXXXXX \nXXXXXXXXX\n    X    '
    );
  });
});
