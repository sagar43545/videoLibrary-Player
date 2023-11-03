import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const HeaderComponent = props => {
  let userImage = auth().currentUser.photoURL;
  return (
    <View style={styles.headerComponent}>
      <View style={{width: 40}}>
        <Image
          source={require('../../assets/mainLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.homeRight}>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => props.onPressNotification()}>
          <Icon name="notifications-outline" color="#282828" size={26} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => props.onPressAvatar()}>
          <Image
            source={
              userImage
                ? {uri: userImage}
                : require('../../assets/defaultProfile.jpg')
            }
            style={styles.channelAvtar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerComponent: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightButton: {
    marginHorizontal: 5,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  channelAvtar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    alignSelf: 'flex-start',
  },
});
export default HeaderComponent;
