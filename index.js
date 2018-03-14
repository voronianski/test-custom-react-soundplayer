const React = require('react');
const ReactDOM = require('react-dom');

const {
  PlayButton,
  Timer
} = require('react-soundplayer/components');
const {
  withSoundCloudAudio
} = require('react-soundplayer/addons');

const streamUrl='https://labs.voronianski.com/react-soundplayer-examples/ksmtk-reborn-edit.mp3'

const MusicPlayer = withSoundCloudAudio(props => {
  return (
    <div className="music-player">
      <h2>{props.data.artist} - {props.data.title}</h2>
      <PlayButton
        onTogglePlay={() => {
          console.log('play button clicked!')
        }}
        {...props} />
      <Timer {...props} />
    </div>
  );
});

const AlbumDetail = props => {
  return (
    <div className="album-detail">
      <div>Album detail info</div>
      <MusicPlayer {...props} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>App!</h1>
      <AlbumDetail
        data={{title: 'Reborn', artist: 'Ksmtk'}}
        streamUrl={streamUrl}
        preloadType="auto" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
