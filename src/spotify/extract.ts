export class SpotifyInteger {
  value: number;

  spotifyBottomRange: number;

  spotifyTopRange: number;

  constructor(number: number) {
    this.spotifyBottomRange = 0;
    this.spotifyTopRange = 50;
    this.value = this.verifyNumber(number);
  }

  verifyNumber(spotifyNumber: number) {
    console.log(this.spotifyBottomRange, this.spotifyTopRange);
    if (
      spotifyNumber < this.spotifyBottomRange ||
      spotifyNumber > this.spotifyTopRange
    ) {
      throw Error('Spotify number should be in range 0 50');
    }
    return spotifyNumber;
  }
}

export function extract() {
  return [];
}
