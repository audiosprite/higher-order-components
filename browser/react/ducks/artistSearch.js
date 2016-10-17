import { convertArtist } from '../converters';

const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
const initialArtists = [];

export const receiveArtists = function (artists) {
  const action = {
    type: RECEIVE_ARTISTS,
    artists: artists
  };
  return action;
};