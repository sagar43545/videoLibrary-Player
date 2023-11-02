//================================ React Native Imported Files ======================================//

import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

//================================ Local Imported Files ======================================//

import colors from '../assets/colors/colors';

const AppHeader = props => {
  return (
    <LinearGradient colors={['#26BBC6', '#175F98']} style={{flex: 1}}>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor:
              props.backgroundColor !== undefined
                ? props.backgroundColor
                : colors.white,
          },
        ]}>
        <TouchableOpacity
          style={styles.headerProfile}
          onPress={props.onLeftIconPress}>
          {props.leftIconPath !== undefined && (
            <Image
              resizeMode="contain"
              style={[
                styles.img,
                props.lefticonSize !== undefined
                  ? {
                      height: props.lefticonSize,
                      width: props.lefticonSize,
                    }
                  : {height: 25, width: 25},
                {tintColor: colors.black},
              ]}
              source={props.leftIconPath}
            />
          )}

          {props.leftText !== undefined && (
            <Text style={styles.text}>{props.leftText}</Text>
          )}
        </TouchableOpacity>
        <View style={styles.headerLogo}>
          {props.titleLogoPath !== undefined && (
            <Image
              style={
                props.titleLogosize !== undefined
                  ? {
                      height: props.titleLogosize,
                      width: props.titleLogosize,
                    }
                  : {width: 30, height: 30}
              }
              source={props.titleLogoPath}
            />
          )}
          {props.title && (
            <Text
              style={[styles.title, {textAlign: 'center'}]}
              numberOfLines={2}>
              {props.title !== undefined ? props.title : 'Header'}
            </Text>
          )}
        </View>
        <View style={styles.headerMenu}>
          {props.rightIconOnePath !== undefined && (
            <TouchableOpacity
              style={{
                height: hp(4),
                width: hp(4),
                borderRadius: hp(1),
                backgroundColor: colors.tabBackground,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: wp(2),
              }}
              onPress={props.onRightIconOnePress}>
              {props.rightIconOnePath !== undefined && (
                <Image
                  resizeMode="contain"
                  style={[
                    styles.img,
                    props.tintColor !== undefined
                      ? {
                          tintColor: props.tintColor,
                        }
                      : {tintColor: colors.primary},
                    props.rightIconSize !== undefined
                      ? {
                          height: props.rightIconSizeHeight,
                          width: props.rightIconSizeWidth,
                        }
                      : {height: 30, width: 30},
                  ]}
                  source={props.rightIconOnePath}
                />
              )}
            </TouchableOpacity>
          )}

          {props.rightText !== undefined && (
            <TouchableOpacity onPress={props.onRightIconTwoPress}>
              <Text style={[styles.text, {color: 'blue'}]}>
                {props.rightText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerProfile: {
    flex: 0.3,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  headerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMenu: {
    flex: 0.3,
    flexDirection: 'row',
    paddingRight: 13,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: wp(5.2),
    color: colors.black,
  },
  text: {
    alignSelf: 'center',
    marginLeft: wp(2),
    fontSize: wp(4.4),
    paddingLeft: wp(1),
    color: colors.black,
  },
  img: {
    alignSelf: 'center',
    tintColor: colors.primary,
  },
});
