export function drawChristmasTree(size: number) {
  if (size === 0) return 'X';
  let tree = '';
  for (let k = 1; k < size; k++) {
    const length = size - k;
    const step = `${new Array(length * 2).fill('X').join('')}`;
    tree += `${step}\n`;
  }
  const trunk = `${new Array(size - 1).fill(' ').join('')}X`;
  return `${tree}${trunk}`;
}
