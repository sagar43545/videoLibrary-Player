//================================ React Native Imported Files ======================================//

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//================================ Local Imported Files ======================================//

import colors from '../assets/colors/colors';

const CandidateListing = props => {
  return (
    <View style={styles.mainContainer}>
      {props.fromSelect && (
        <View style={styles.imageView}>
          <TouchableOpacity onPress={props.onAddCandidate}>
            <Image
              source={
                props.isSelected
                  ? require('../assets/images/checkbox.png')
                  : require('../assets/images/unchecked.png')
              }
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={[styles.centerStyle,{paddingHorizontal: !props.fromSelect? wp(5) : 0}]}>
        <Text style={styles.nameStyle} numberOfLines={1}>
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: wp(4),
            marginTop: 1,
            color: colors.unFocusColor,
          }}
          numberOfLines={1}>
          {props.party}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(10),
    width: wp(90),
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: wp(3),
    marginBottom: 10,
    borderBottomColor: colors.unFocusColor,
  },
  imageView: {
    height: hp(10),
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerStyle: {
    height: hp(10),
    width: wp(60),
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: wp(4.2),
    color: colors.black,
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
});

export default CandidateListing;
