/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Video, {VideoRef} from 'react-native-video';

function App(): React.JSX.Element {
  const video = React.useRef<VideoRef | null>(null);

  return (
    <View style={{flex: 1}}>
      <Video
        ref={video}
        style={{width: '100%', height: 300}}
        enterPictureInPictureOnLeave
        source={{
          uri: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
        }}
        resizeMode="contain"
        onError={e => {
          console.warn(e);
        }}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          video.current?.enterPictureInPicture();
          console.log('enterPictureInPicture called');
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
          Enter Picture in Picture
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
