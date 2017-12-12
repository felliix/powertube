import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { HomePage, mapStateToProps } from '..';
import { SongData } from '../../../components/Song';
import SongList from '../../../components/SongList';
import { mockState } from '../../../setupTests';

describe('<HomePage />', () => {
  let testSongs: SongData[];
  let hpComponent: ShallowWrapper<any, any>;

  beforeEach(() => {
    testSongs = [
      {
        key: 'test_key',
        id: 'test_id',
        title: 'test_title',
        thumb: 'test_thumb',
        duration: 60,
        playing: false,
      },

      {
        key: 'test_key2',
        id: 'test_id2',
        title: 'test_title2',
        thumb: 'test_thumb2',
        duration: 300,
        playing: true,
      },

      {
        key: 'test_key3',
        id: 'test_id3',
        title: 'test_title3',
        thumb: 'test_thumb3',
        duration: 5000,
        playing: false,
      }
    ];

    hpComponent = shallow(
      <HomePage songs={testSongs} />
    );
  });

  it('should render a SongList with the given songs', () => {
    const songList: JSX.Element = <SongList songs={testSongs} />;
    expect(hpComponent.contains(songList)).toBe(true);
  });

  describe('mapStateToProps', () => {
    it('should take the state and return an object containing songs', () => {
      const state = mockState({ toArray: () => testSongs }, 'global', 'songs');
      expect(mapStateToProps(state).songs).toEqual(testSongs);
    });
  });
});
