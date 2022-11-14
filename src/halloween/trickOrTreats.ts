function hasBomb(candies: string[][]) {
  return candies.reduce((acc, packet) => {
    const isBombInPacket = packet.some(candy => candy === 'bomb');
    return acc || isBombInPacket;
  }, false);
}

function eachChildHaveLessThanTwoCandy(candies: string[][]) {
  return candies.reduce((acc, packet) => {
    const hasLessThanTwoCandy =
      packet.filter(candy => candy === 'candy').length < 2;
    return acc || hasLessThanTwoCandy;
  }, false);
}

export function trickOrTreats(numberOfChild: number, candies: string[][]) {
  const trickOrTreat = 'Trick or treat!';

  const result = new Set(
    candies.map(packet => packet.filter(candy => candy === 'candy').length)
  );
  if (result.size !== 1) return trickOrTreat;
  if (eachChildHaveLessThanTwoCandy(candies)) return trickOrTreat;
  if (numberOfChild < 2) return trickOrTreat;

  if (candies.length !== numberOfChild) return trickOrTreat;

  if (hasBomb(candies)) return trickOrTreat;

  return 'Thank you, strange uncle!';
}
