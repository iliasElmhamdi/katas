import { extract, SpotifyInteger } from './extract';

test('extract_returns_a_list', () => {
  const extracted = extract();
  expect(Array.isArray(extracted)).toBe(true);
});

test('Spotify_integer_should_be_in_range_0_50', () => {
  const tooBigSpotifyInteger = () => new SpotifyInteger(55);
  // For all

  expect(tooBigSpotifyInteger).toThrow('should be in range');
});

// test('extract_should_have_number_of_tracks_greater_than_zero', () => {
//   expect(extract(-1)).toThrow('NumberOfTracks should be positive')
// })
