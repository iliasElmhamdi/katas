import { trickOrTreats } from './trickOrTreats';

describe('trick of treats tests', () => {
  // eslint-disable-next-line func-names
  it('each child should have a packets', function () {
    const candies = [
      ['candy', 'candy'],
      ['candy', 'candy'],
    ];
    const numberOfChild = 2;

    const actual = trickOrTreats(numberOfChild, candies);
    expect(actual).toBe('Thank you, strange uncle!');
  });

  // eslint-disable-next-line func-names
  it('same number of children and packets', function () {
    const candies = [[], [], []];
    const numberOfChild = 2;

    const actual = trickOrTreats(numberOfChild, candies);
    expect(actual).toBe('Trick or treat!');
  });

  it('each child should have the same amount of candy', () => {
    const candies = [
      ['candy', 'candy', 'candy'],
      ['candy', 'candy'],
    ];
    const numberOfChild = 2;
    expect(trickOrTreats(numberOfChild, candies)).toBe('Trick or treat!');
  });

  // eslint-disable-next-line func-names
  it('at least two children', function () {
    const candies = [['candy', 'candy']];
    const numberOfChild = 1;
    const actual = trickOrTreats(numberOfChild, candies);
    expect(actual).toBe('Trick or treat!');
  });

  it("packets shouldn't have a bomb", () => {
    const candies = [
      ['candy', 'candy'],
      ['candy', 'candy', 'bomb'],
    ];
    const numberOfChild = 2;
    const actual = trickOrTreats(numberOfChild, candies);
    expect(actual).toBe('Trick or treat!');
  });
  // eslint-disable-next-line func-names
  it('each child should have at least two candies', function () {
    const candies = [['candy', 'candy'], ['candy']];
    const numberOfChild = 2;
    const actual = trickOrTreats(numberOfChild, candies);
    expect(actual).toBe('Trick or treat!');
  });
});
