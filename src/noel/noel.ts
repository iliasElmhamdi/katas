const createString = (size: number, elt: string) => {
  return new Array(size).fill(elt).join('');
};

export function drawChristmasTree(size: number, hasStart = false) {
  if (size === 0) return 'X';
  const base =
    createString(size - 1, ' ') +
    createString(1, 'X') +
    createString(size - 1, ' ');
  let tree = `${base}\n`;
  for (let k = 1; k < size; k++) {
    const step =
      createString(size - k - 1, ' ') +
      createString(3 + 2 * (k - 1), 'X') +
      createString(size - k - 1, ' ');
    tree += `${step}\n`;
  }

  const star = `${
    createString(size - 1, ' ') +
    createString(1, '*') +
    createString(size - 1, ' ')
  }\n`;

  return (hasStart ? star : '') + tree + base;
}
