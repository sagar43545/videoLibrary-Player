import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import HeaderComponent from '../Utils/HeaderComponent';
import YoutubePlayer from "react-native-youtube-iframe";

const Article2 = props => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      console.log('video has finished playing!');
    }
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerStyleView}>
          <HeaderComponent
            onPressAvatar={() => props.navigation.navigate('Users')}
            onPressNotification={() =>
              props.navigation.navigate('Notifications')
            }
          />
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Image
              source={require('../../assets/articleUp.jpeg')}
              style={styles.wallWripple}
              resizeMode="center"
            />
            <Text style={[styles.growingContent,{marginBottom: 0}]}>
              A democratic government is supposed to be of, by, and for the people. But government institutions have betrayed our trust. The intelligence agencies spy on our own people. Government and tech platforms conspire to surveil and censor the public. Regulatory agencies have been captured by those they are supposed to regulate: Wall Street controls the SEC. Polluters and extractive industries dominate the EPA and BLM. Pharma controls the CDC, NIH, and FDA. Big Ag controls the USDA. Big Tech has captured the FTC. No wonder trust in government is at all-time lows. It’s time to earn it back.{"\n\n"}

              From his long experience and familiarity with systems of power, Robert F. Kennedy, Jr. understands that most people in corporations and government are perfectly decent human beings. They play the game, but a lot of them are fed up with its phoniness, and cynical about the paralysis of the system. They feel trapped in it. Clean government isn’t just about removing corrupt individuals. It is about changing a system in which perfectly decent people become agents of corruption without even knowing it.{"\n\n"}
            </Text>
            <Image
                source={require('../../assets/articleMiddle.jpeg')}
                style={styles.wallWripple}
                resizeMode="center"
            />
            <Text style={styles.growingContent}>
              We are going to remake public institutions to serve the public. We will roll back the secrecy and make government transparent. We will protect whistleblowers and prosecute officials who abuse the public trust. We will rein in the lobbyists and slam shut the revolving door that shunts people from government agencies to lucrative positions in the companies they were supposed to regulate, and back again. We will get money out of politics. We will open our institutions to real citizen involvement. We will restore integrity to government.
            </Text>
            <View style={styles.youtubePlayer}>
              <Text style={styles.videoTitle}>
                {"Who Censored Me And Why"}
              </Text>
              <YoutubePlayer
                  height={220}
                  play={playing}
                  videoId={"yRuFXxvGxg8"}
                  onChangeState={onStateChange}
                  webViewStyle={styles.youtubeOpacity}
              />
            </View>
            <View style={styles.youtubePlayer}>
              <Text style={styles.videoTitle}>
                {"Why The Media Lies"}
              </Text>
              <YoutubePlayer
                  height={220}
                  play={playing}
                  videoId={"_sBWvEf9HHs"}
                  onChangeState={onStateChange}
                  webViewStyle={styles.youtubeOpacity}
              />
            </View>
            <View style={styles.youtubePlayer}>
              <Text style={styles.videoTitle}>
                {"The Revolving Door Between Industry And Government Agencies"}
              </Text>
              <YoutubePlayer
                  height={220}
                  play={playing}
                  videoId={"RLHDlvW6YuE"}
                  onChangeState={onStateChange}
                  webViewStyle={styles.youtubeOpacity}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  youtubePlayer: {
    marginTop: 15,
  },
  videoTitle: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 15,
    color: '#212121',
    marginBottom: 8,
  },
  youtubeOpacity: {
    opacity: 0.99,
  },
  headerStyleView: {
    height: 50,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 25,
    color: '#212121',
    marginHorizontal: 15,
    // marginTop: 50,
  },
  content: {
    color: '#2c2c2c',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  space: {
    height: 25,
  },
  containerDescription: {
    marginBottom: 15,
    marginTop: 25,
    marginHorizontal: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  link: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginLeft: 14,
  },
  profile: {
    marginTop: 30,
    width: '100%',
    height: 200,
    // marginHorizontal: 15,
  },
  titleDescription: {
    fontFamily: 'Roboto-Black',
    fontSize: 17,
    marginTop: 15,
    marginBottom: 5,
  },
  subTitleDescription: {
    fontFamily: 'Outfit-SemiBold',
    color: '#92C255',
    fontSize: 15,
    marginTop: 10,
  },
  description: {
    fontFamily: 'Outfit-Regular',
    color: '#595959',
    fontSize: 15,
    fontWeight: '300',
  },
  backgroundVideo: {
    marginTop: 20,
    height: 200,
    width: 320,
    flex: 1,
    // top: 0,
    backgroundColor: '#000',
  },
  informationContent1: {marginBottom: 60, marginTop: 30, marginHorizontal: 20},
  growingTitle: {
    fontFamily: 'Outfit-SemiBold',
    color: '#5E8887',
    fontSize: 21,
    textAlign: 'center',
  },
  growingContent: {
    marginTop: 10,
    fontFamily: 'Outfit-Regular',
    color: '#595959',
    fontSize: 17,
    fontWeight: '300',
    textAlign: 'left',
    marginBottom: 10,
  },
  thirdContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 10,
  },
  thirdContainerChild: {justifyContent: 'center', alignItems: 'center'},
  numberTitle: {
    fontFamily: 'Outfit-SemiBold',
    color: '#5E8887',
    fontSize: 40,
  },
  stateTitle: {
    fontFamily: 'Outfit-SemiBold',
    color: '#92C255',
    fontSize: 15,
  },
  mt10: {
    marginTop: 10,
  },
  contactUsSection: {
    marginBottom: 50,
    // marginTop: 20,
    // marginHorizontal: 5,
    backgroundColor: '#5E8886',
    width: '100%',
    paddingBottom: 20,
  },
  wallWripple: {
    width: '100%',
    height: 250,
  },
  txtContactUsTitle: {
    textAlign: 'center',
    fontFamily: 'Outfit-SemiBold',
    color: 'white',
    fontSize: 21,
  },
  textInputContactUs: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: '#000000',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 15,
  },
  textInputContactUsMessage: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: '#000000',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 15,
    height: 100,
  },
  contactUsSubmitButton: {
    width: 100,
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  txtSubmit: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Outfit-Regular',
  },
  peopleSaidImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  workImage: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  renderFirstCarousel: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 240,
    marginLeft: 25,
    marginRight: 25,
  },
  renderSecondCarousel: {
    borderRadius: 5,
    height: 280,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    alignSelf: 'center',
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  previousCarousel: {
    width: '15%',
    alignItems: 'flex-end',
  },
  mainCarousel: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // alignSelf: 'center',
  },
  mainWorkCarousel: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // backgroundColor: 'red',
    // alignSelf: 'center',
  },
  nextCarousel: {
    width: '15%',
    alignItems: 'flex-start',
  },
  reviewContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignSelf: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  outfitRegular: {
    fontFamily: 'Outfit-Regular',
  },
  outfitRegularCenter: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  growingContent2: {
    marginTop: 10,
    fontFamily: 'Outfit-Regular',
    color: '#595959',
    fontSize: 17,
    fontWeight: '300',
    textAlign: 'center',
    marginHorizontal: 15,
  },
  paginationContainer: {
    width: 50,
    height: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: '#404040',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  workContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 30,
  },
});

export default Article2;
