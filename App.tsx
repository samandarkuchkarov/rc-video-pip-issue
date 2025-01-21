/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';

import Video, {VideoRef} from 'react-native-video';

function App(): React.JSX.Element {
  const video = React.useRef<VideoRef | null>(null);

  useEffect(() => {
    setTimeout(() => {
      console.log(video.current);
      video.current?.enterPictureInPicture();
    }, 5000);
  }, []);
  return (
    <Video
      ref={video}
      style={{flex: 1}}
      enterPictureInPictureOnLeave
      source={{
        uri: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
      }}
      onLoad={e => {
        video.current?.resume();
      }}
      resizeMode="contain"
      onError={e => {
        console.warn(e);
      }}
    />
  );
}

export default App;
