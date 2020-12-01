import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import TrackPlayer from 'react-native-track-player';
import VlcPlayer from 'react-native-vlc-player';
import RNFetchBlob from 'rn-fetch-blob'


// const Track1 = {
//   id: '1',
//   url: require('./neat-it_is_u.mp3'),
//   title: 'Track Title',
//   artist: 'Track Artist',
//   // pitchAlgorithm: TrackPlayer.PITCH_ALGORITHM_MUSIC,
// }

// const Track2 = {
//   id: '2',
//   url: require('./neat-mercedes_benzo.mp3'),
//   title: 'Track Title',
//   artist: 'Track Artist',
//   // pitchAlgorithm: TrackPlayer.PITCH_ALGORITHM_MUSIC,
// }

// const Track3 = {
//   id: '3',
//   url: require('./neat-pomshello.mp3'),
//   title: 'Track Title',
//   artist: 'Track Artist',
//   // pitchAlgorithm: TrackPlayer.PITCH_ALGORITHM_MUSIC,
// }

// const start = async () => {
//   // Set up the player
//   await TrackPlayer.setupPlayer();
//   await TrackPlayer.updateOptions({
//     capabilities: [
//       TrackPlayer.CAPABILITY_PLAY,
//       TrackPlayer.CAPABILITY_PAUSE
//     ]
//   })

//   // Add a track to the queue

//   await TrackPlayer.add({...Track1, pitchAlgorithm: TrackPlayer.PITCH_ALGORITHM_MUSIC });
//   // Start playing it
//   // await TrackPlayer.play();
//   // await TrackPlayer.setRate(0.8)
//   TrackPlayer.registerPlaybackService
//   return TrackPlayer
// };


// const ALGOS = [
//   TrackPlayer.PITCH_ALGORITHM_LINEAR,
//   TrackPlayer.PITCH_ALGORITHM_MUSIC,
//   TrackPlayer.PITCH_ALGORITHM_VOICE
// ]

export default class App extends Component {
  constructor() {
    super()
    this.state={
      trackId: '1',
      playing: false,
      speed: 1.0,
      algoId: 1
    }
    // this.TrackPlayer = null
    this.togglePlay = this.togglePlay.bind(this)
    this.changeSpeed = this.changeSpeed.bind(this)
    this.changeTempoinThirdy = this.changeTempoinThirdy.bind(this)
    this.reset = this.reset.bind(this)
    this.changeAlgo = this.changeAlgo.bind(this)
    this.player = null
    this.vlcplayer = React.createRef();
  }

  async componentDidMount () {
    // this.player = new Audio.Sound();
    // this.TrackPlayer = await start()
    // TrackPlayer.addEventListener('playback-state', async (data) => {
    //   console.log(data)
    // });
    console.log(this.vlcplayer)
    console.log(this.vlcplayer)
  }

  async changeTrack (track) {
    // track.pitchAlgorithm = ALGOS[this.state.algoId]
    // console.log('track', track)
    // this.setState({
    //   trackId: track.id,
    //   playing: true,
    //   speed: 1.0
    // })

    // await TrackPlayer.reset()
    // await TrackPlayer.add(track)
    // await TrackPlayer.play()
  }


  togglePlay () {
    // this.setState({ playing: !this.state.playing }, state => {
    //   console.log(this.state)
    //   this.state.playing ? this.TrackPlayer.setRate(this.state.speed) : this.TrackPlayer.pause()
    // })
    this.vlcplayer.play().then(res => {
      console.log(res);
    })
  }

  changeSpeed (value) {
    let newValue = this.state.speed + value
    if(newValue >= 1.25) {
      newValue = 1.25
    } else if (newValue <= 0.75) {
      newValue = 0.75
    }
    // this.setState({ playing: true, speed: Math.round(newValue * 100) / 100 }, () => {
    //   console.log(this.state)
    //   this.TrackPlayer.setRate(this.state.speed)
    // })

    this.setState({ playing: true, speed: Math.round(newValue * 100) / 100 }, () => {
      console.log(this.state)
    })


  }

  async changeAlgo (algoId) {
    // let track = {}
    // switch (this.state.trackId) {
    //   case '1':
    //     track = Track1
    //     break;
    //   case '2':
    //     track = Track2
    //     break;
    //   case '3':
    //     track = Track3
    //     break;
    //   default:
    //     break;
    // }
    // this.setState({
    //   algoId,
    //   playing: true,
    //   speed: 1.0
    // })

    // track.pitchAlgorithm = ALGOS[algoId]

    // await TrackPlayer.reset()
    // await TrackPlayer.add(track)
    // await TrackPlayer.play()
  }

  reset () {
    // this.TrackPlayer.seekTo(0)
  }

  changeTempoinThirdy (value) {
    // setTimeout(() => {
    //   this.changeSpeed(value)
    // }, 30000);
  }

  /* =====================

    VLC is just shuved in there for testing

  =====================  */

  render() {
    return (
      <View style={style.view}>
        <LinearGradient start={{x: 0.5, y: 1}} end={{x: 0.5, y: 0.7}} colors={['#121212', '#262626']} style={style.linearGradient}>

        <VlcPlayer
          ref={this.vlcplayer}
          style={{
            width: 300,
            height: 200,
          }}
          paused={true}
          speed={2}
          autoplay={false}
          source={{
            uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
            autoplay: false
          }}  />


        <View style={style.artWrapper}>
          {/* <Image source={require('./artwork.jpg')} style={style.artwork}/> */}
          <TouchableOpacity style={[style.recordRow, { borderColor: this.state.trackId === '1' ? 'white' : 'rgba(255,255,255,.1)'}]} onPress={() => this.changeTrack(Track1)}>
            <Text style={style.name}>It is u</Text>
            <Text style={style.artist}>Neat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.recordRow, { borderColor: this.state.trackId === '2' ? 'white' : 'rgba(255,255,255,.1)'}]} onPress={() => this.changeTrack(Track2)}>
            <Text style={style.name}>Mercedes_benzo</Text>
            <Text style={style.artist}>Neat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.recordRow, { borderColor: this.state.trackId === '3' ? 'white' : 'rgba(255,255,255,.1)'}]} onPress={() => this.changeTrack(Track3)}>
            <Text style={style.name}>Pomshello</Text>
            <Text style={style.artist}>Neat</Text>
          </TouchableOpacity>

            <Text style={[style.artist, { marginVertical: 20 }]}>Algorithm</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => this.changeAlgo(0)} style={[style.algoButton, { borderColor: this.state.algoId === 0 ? 'white' : 'rgba(255,255,255,.1)'}]}>
              <Text style={style.artist}>Linear</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.changeAlgo(1)} style={[style.algoButton, { borderColor: this.state.algoId === 1 ? 'white' : 'rgba(255,255,255,.1)'}]}>
              <Text style={style.artist}>Music</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.changeAlgo(2)} style={[style.algoButton, { borderColor: this.state.algoId === 2 ? 'white' : 'rgba(255,255,255,.1)'}]}>
              <Text style={style.artist}>Voice</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.buttonsWrapper}>
          <TouchableOpacity onPress={this.reset}>
            <Image source={require('./icons/previous.png')} style={{ width: 20, height: 20, tintColor: 'white' }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.togglePlay}>
            {
              this.state.playing
                ? <Image source={require('./icons/pause.png')} style={{ width: 40, height: 40, tintColor: 'white' }}/>
                : <Image source={require('./icons/play.png')} style={{ width: 40, height: 40, tintColor: 'white' }}/>
            }
          </TouchableOpacity>
          <View style={{ width: 20 }}/>
        </View>
        <View style={style.buttonsWrapper}>
          <TouchableOpacity style={style.bpmButton} onPress={() => this.changeSpeed(-0.05)}>
            <Image source={require('./icons/minus.png')} style={{ width: 20, height: 20, tintColor: 'white' }} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Image source={require('./icons/sound.png')} style={{ width: 20, height: 20, tintColor: 'white' }} />
            <Text style={{ color: 'white', marginLeft: 5 }}>x{this.state.speed}</Text>
          </View>
          <TouchableOpacity style={style.bpmButton} onPress={() => this.changeSpeed(0.05)}>
            <Image source={require('./icons/add.png')} style={{ width: 20, height: 20, tintColor: 'white' }} />
          </TouchableOpacity>
        </View>

        <View style={[style.buttonsWrapper, { marginTop: 10 }]}>
          <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 12, borderRadius: 40, borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' }} onPress={() => this.changeTempoinThirdy(0.25)}>
              <Text style={{ color: 'white' }}>+ 0.25 tempo in 30 sec</Text>
          </TouchableOpacity>
        </View>
        <View style={[style.buttonsWrapper, { marginTop: 10 }]}>
          <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 12, borderRadius: 40, borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' }} onPress={() => this.changeTempoinThirdy(-0.25)}>
              <Text style={{ color: 'white' }}>- 0.25 tempo in 30 sec</Text>
          </TouchableOpacity>
        </View>
        </LinearGradient>
      </View>
    )
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  artWrapper: {
    height: '40%',
    width: '80%'
  },
  artwork: {
    width: '100%',
    height: '100%'
  },
  buttonsWrapper: {
    marginTop: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  bpmButton: {
    backgroundColor: 'rgba(255,255,255,.1)',
    borderRadius: 40,
    padding: 15
  },
  recordRow: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.1)',
    borderRadius: 2,
    padding: 5,
    margin: 5
  },
  artist: {
    fontSize: 14,
    color: 'white',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  algoButton: {
    padding: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.1)'
  }
})
